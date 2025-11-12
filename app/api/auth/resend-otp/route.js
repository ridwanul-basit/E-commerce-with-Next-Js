import { connectDB } from "@/lib/db";
import { catchError } from "@/lib/helperFunction";
import { zschema } from "@/lib/ZodSchema";
import UserModel from "@/models/User.model";

export async function POST(request) {

    try {
        
        await connectDB();
        const payload =  await request.json()
        const validationSchema = zschema.pick({
          email:true
        })

        const validatedData= validationSchema.safeParse(payload)
        if(!validatedData.success){
        return response(false,401,'Invalid or missing input field', validatedData.error )
        }

       const getUser = await UserModel.findOne({deletedAt:null,email}).lean()
        if(!getUser){
            return response(false,404,"User not found")
        }

        

    
    } catch (error) {
        
        return catchError(error)
    }
    
}