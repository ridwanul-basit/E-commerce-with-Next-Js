import { isAuthenticated } from "@/lib/authentication";
import { connectDB } from "@/lib/db";
import { catchError, response } from "@/lib/helperFunction";
import MediaModel from "@/models/Media.model";
import ProductModel from "@/models/Product.model";
import { isValidObjectId } from "mongoose";

export async function GET(request, { params }) {
  try {
       const auth = await isAuthenticated('admin',request)
    if (!auth.isAuth){
        return response(false,403,'Unauthorized')
    }
    await connectDB();

    const getParams = await params;
    const id = getParams.id;

    const filter = {
      deletedAt: null,
    };

    if (!isValidObjectId(id)) {
      return response(false, 404, "Invalid object id");
    }

    filter._id = id;
    const getProduct = await ProductModel.findOne(filter)
  .populate('media', 'asset_id public_id path thumbnail_url secure_url alt title')
  .lean();


    if (!getProduct) {
      return response(false, 404, "Product not found");
    }

    return response(true, 200, "Product Found", getProduct);
  } catch (error) {
    return catchError(error);
  }
}
