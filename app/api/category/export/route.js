import { connectDB } from "@/lib/db";
import { catchError, response } from "@/lib/helperFunction";
import CategoryModel from "@/models/Category.model";
import { isValidObjectId } from "mongoose";

export async function GET(request, { params }) {
  try {
    //     const auth = await isAuthenticated('admin')
    // if (!auth.isAuth){
    //     return response(false,403,'Unauthorized')
    // }
    await connectDB();

    const filter = {
      deletedAt: null,
    };


    const getCategory = await CategoryModel.findOne(filter).sort({createdAt:-1}).lean();

    if (!getCategory) {
      return response(false, 404, "Collection empty");
    }

    return response(true, 200, "Data Found", getCategory);
  } catch (error) {
    return catchError(error);
  }
}
