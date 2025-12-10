import { connectDB } from "@/lib/db";
import { catchError, response } from "@/lib/helperFunction";
import ProductVariantModel from "@/models/ProductVariant.model";



export async function GET() {
  try {
   
    await connectDB();

    const getParams = await params;
    const id = getParams.id;

    const getSize = await ProductVariantModel.distinct('size')

    if (!getSize) {
      return response(false, 404, "Size not found");
    }

    return response(true, 200, "Size Found", getSize);
  } catch (error) {
    return catchError(error);
  }
}
