import { connectDB } from "@/lib/db";
import { catchError, response } from "@/lib/helperFunction";
import { zschema } from "@/lib/ZodSchema";
import ProductVariantModel from "@/models/ProductVariant.model";

export async function PUT(request) {
  try {
    await connectDB();
    const payload = await request.json();

    const schema = zschema.pick({
      _id: true,
      name: true,
      slug: true,
      description: true,
      mrp: true,
      sellingPrice: true,
      discountPercentage: true,
      category: true,
      media: true,
    });

    const validate = schema.safeParse(payload);
    if (!validate.success) {
      return response(false, 400, "Invalid or missing fields", validate.error);
    }

    const {
      _id,
      name,
      slug,
      description,
      mrp,
      sellingPrice,
      discountPercentage,
      category,
      media,
    } = validate.data;

    // Find product first
    const productVariant = await ProductVariantModel.findOne({
      deletedAt: null,
      _id,
    });

    if (!productVariant) {
      return response(false, 404, "Product not found");
    }

    // Update productVariant fields
    productVariant.name = name;
    productVariant.slug = slug;
    productVariant.description = description;
    productVariant.mrp = mrp;
    productVariant.sellingPrice = sellingPrice;
    productVariant.discountPercentage = discountPercentage;
    productVariant.category =category ; // categoryId
    productVariant.media = media; // array of media IDs

    await productVariant.save();

    return response(true, 200, "Product updated successfully");
  } catch (error) {
    return catchError(error);
  }
}
