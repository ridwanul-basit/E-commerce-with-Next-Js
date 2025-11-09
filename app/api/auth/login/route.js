import { emailVerificationLink } from "@/email/emailVerification";
import { connectDB } from "@/lib/db";
import { catchError, generateOTP } from "@/lib/helperFunction";
import { sendMail } from "@/lib/sendMail";
import { zschema } from "@/lib/ZodSchema";
import UserModel from "@/models/User.model";
import { SignJWT } from "jose";

export async function POST(request) {
    try {
        await connectDB()
        const payload = await requestFormReset.json()
        const validationSchema = zschema.pick({
            email:true
        }).extend({
            paswword:z.string()
        })
        if (!validatedData.success) {
            return response(false, 401, "Invalid or missing input", validatedData.error);
        }

        const {email,password} = validatedData.data
        
        const getUser = await UserModel.findOne({email})
        if (!getUser){
            return response(false, 404, "Invalid login credentials");
        }

        if(!getUser.isEmailVerified){
             const secret = new TextEncoder().encode(process.env.SECRET_KEY);
                const token = await new SignJWT({ userId: getUser._id.toString() }) // <-- FIXED
                  .setIssuedAt()
                  .setExpirationTime("1h")
                  .setProtectedHeader({ alg: "HS256" })
                  .sign(secret);
            
               const verifyLink = `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/verify-email?token=${token}`;
            
            // generate HTML content
            const htmlContent = emailVerificationLink(verifyLink);

            await sendMail(
              "Email Verification - Next JS E-Commerce",
              email,
              htmlContent // <-- send the HTML, not plain text
            );

            return (false,401,"Your email is not verified . We have sent verification link to your email. Verify first")
        }

        const isPasswordVerified = await getUser.comparePassword(password)

        if(!isPasswordVerified){
          return response(false, 404, "Invalid login credentials");
        }

        // otp generation 

        await OTPModel.deleteMany({email})

        const otp = generateOTP()

        // store otp iin database 

        const newOtpData  = new OTPModel ({
            email,otp
        })

        await newOtpData.save()
        const otpEmailStatus = await sendMail("Your login Verification Code",email,otpEmail(otp))
        if (!otpEmailStatus.success){
            return response(false,400, "failed to send Otp")
        }
        return response(true, 200, " Otp Send Successfully")


    }catch (error) {
        return catchError(error)
        
    }
    
}