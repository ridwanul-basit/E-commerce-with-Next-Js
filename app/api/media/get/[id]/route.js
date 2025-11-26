import { connectDB } from "@/lib/db";
import { catchError } from "@/lib/helperFunction";


export async function GET(request, {params}) {

    try {

        
        await connectDB()
        
    } catch (error) {
        return catchError(error)
    }

    
}