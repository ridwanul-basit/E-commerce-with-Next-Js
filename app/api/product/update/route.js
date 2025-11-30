import { isAuthenticated } from "@/lib/authentication";
import { connectDB } from "@/lib/db";
import { catchError, response } from "@/lib/helperFunction";
import { zschema } from "@/lib/ZodSchema";
import ProductModel from "@/models/Product.model";
import { encode } from "entities";


export async function PUT(request) {
  try {
    const auth = await isAuthenticated('admin',request)
    if (!auth.isAuth){
        return response(false,403,'Unauthorized')
    }

    await connectDB();
    const payload = await request.json();

    const schema = zschema.pick({
  name: true,
  slug: true,
  category: true,
  mrp: true,
  sellingPrice: true,
  discountPercentage: true,
  media: true,
  description: true,
});

    const validate = schema.safeParse(payload);

    if (!validate.success) {
      return response(false, 400, "Invalid or missing field", validate.error);
    } 
    const productData = validate.data
    const getProduct = await ProductModel.findOne({
          deletedAt: null,
          _id: _id,
        });
    
        if (!getProduct) {
          return response(false, 404, "Data not found");
        }
    
    
        getProduct.name=productData.name
        getProduct.slug=productData.slug
        getProduct.category=productData.category
        getProduct.mrp=productData.mrp
        getProduct.sellingPrice=productData.sellingPrice
        getProduct.discountPercentage=productData.discountPercentage
        getProduct.media=productData.media
        getProduct.description= encode(productData.description)

    await getProduct.save()
     return response(true, 200, "Product updated successfully");
    
  } catch (error) {
    return catchError(error)
  }
}
