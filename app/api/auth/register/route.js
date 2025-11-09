import { emailVerificationLink } from "@/email/emailVerification";
import { connectDB } from "@/lib/db";
import { zschema } from "@/lib/ZodSchema";
import UserModel from "@/models/User.model";

export async function POST(request) {

    try{
        await connectDB()
        const validationSchema = zschema.pick({
            name:true, email: true, password:true
        })

        const payload = await request.json() 
        const validatedData = validationSchema.safeParse(payload)
        if(!validatedData.success){
            return response(false,401, 'Invalid or missing input field',validatedData.error)
        }
        const {name,email,password} = validatedData
        const checkUser = await UserModel.exists({email})
        if (checkUser){
            return response(true,409, 'USer already registered')
        }
        const newRegistration = new UserModel ({
            name, email, password 
        })
        await newRegistration.save()
        const secret = new TextEncoder().encode(process.env.SECRET_KEY)
        const token = await new SignJWT({userId: newRegistration._id})
            .setIssuedAt()
            .setExpirationonTime('1h')
            .setProtectedHeader({alg:'HS256'})
            .sign(secret)    
        await sendMail("Email Verification request from Ridwanul Basit",email,emailVerificationLink(`${process.env.NEXT_PUBLIC_BASE_URL}/verify-email/${token}`))
     return response(true,200, 'Please Verify your email address')

    } catch (error) {
        catchError(error)
    }
    
}