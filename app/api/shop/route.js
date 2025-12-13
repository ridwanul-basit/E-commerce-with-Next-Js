import { connectDB } from "@/lib/db";
import { catchError, response } from "@/lib/helperFunction";


export async function GET(request) {
  try {    
    await connectDB();

    const searchParams = request.nextUrl.searchParams
    
    // get filters from query params

    const size = searchParams.get('size')
    const color = searchParams.get('color')
    const minPrice = pareseInt(searchParams.get('minPrice')) || 0
    const maxPrice = pareseInt(searchParams.get('maxPrice')) || 0
    const category = searchParams.get('category')
    const search = searchParams.get('q')

    // pagination




   
  } catch (error) {
    return catchError(error);
  }
}
