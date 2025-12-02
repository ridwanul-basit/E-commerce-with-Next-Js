
import { isAuthenticated } from "@/lib/authentication";
import { connectDB } from "@/lib/db";
import { catchError, response } from "@/lib/helperFunction";
import MediaModel from "@/models/Media.model";
import ProductVariantModel from "@/models/ProductVariant.model";
import { isValidObjectId } from "mongoose";

export async function GET(request, { params }) {
  try {
    const auth = await isAuthenticated("admin", request);
    if (!auth.isAuth) {
      return response(false, 403, "Unauthorized");
    }

    await connectDB();

     const resolvedParams = await params; // <-- unwrap the Promise
    const { id } = resolvedParams;
     console.log("Product ID:", id);

    if (!isValidObjectId(id)) {
      return response(false, 404, "Invalid object id");
    }
    console.log("Product ID:", id);


    const productVariant = await ProductVariantModel.findOne({ _id: id, deletedAt: null })
      .populate("media", "asset_id public_id path thumbnail_url secure_url alt title")
      .populate("category", "name slug")
      .lean();

    if (!productVariant) {
      return response(false, 404, "Product Variant not found");
    }

    return response(true, 200, "Product Variant Found", productVariant);
  } catch (error) {
    return catchError(error);
  }
}
