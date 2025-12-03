import { isAuthenticated } from "@/lib/authentication";

export async function GET() {
    try {

    const auth = await isAuthenticated("admin", request);
        if (!auth.isAuth) {
          return response(false, 403, "Unauthorized");
        }
    
    
        
    } catch (error) {
        
    }
}