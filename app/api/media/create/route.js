import cloudinary from "@/lib/cloudinary";
import { connectDB } from "@/lib/db";
import { catchError,  response } from "@/lib/helperFunction";
import MediaModel from "@/models/Media.model";

export async function POST(request) {
    const payload = await request.json()
    try {

        await connectDB()
        const newMedia = await MediaModel.insertMany(payload)
        return response(true,200,"Media uploadded successfully",newMedia)
        
    } catch (error) {
        if(payload && payload.length > 0){
            const publicIds = payload.map(data=>data.public_id)
            try {
                await cloudinary.api.delete_resources(publicIds)
            } catch (deleteError) {
                error.cloudinary = deleteError
            }
        }
        return catchError(error)
        
    }
    
}