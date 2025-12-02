import { isAuthenticated } from "@/lib/authentication";
import { connectDB } from "@/lib/db";
import { catchError, response } from "@/lib/helperFunction";
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

    if (!isValidObjectId(id)) {
      return response(false, 404, "Invalid object id");
    }


    const cupon = await CuponModel.findOne({ _id: id, deletedAt: null })
      .lean();

    if (!cupon) {
      return response(false, 404, "Cupon not found");
    }

    return response(true, 200, "Cupon Found", cupon);
  } catch (error) {
    return catchError(error);
  }
}
