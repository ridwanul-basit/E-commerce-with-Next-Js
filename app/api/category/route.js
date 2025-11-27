import { catchError } from "@/lib/helperFunction";

export async function GET(request) {
   
    try {

        // const auth = await isAuthenticated('admin')
    // if (!auth.isAuth){
    //     return response(false,403,'Unauthorized')
    // }
      

    } catch (error) {
        return catchError(error )
    }
    
}