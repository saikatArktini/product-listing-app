import { asyncHandler } from "@/middleware/asyncHandler";
import { validateRequest } from "@/middleware/validateRequest";

import {
  validateCreateProduct,
  validateUpdateProduct,
  validateProductQuery,
} from "@/validators/product.validator";

import {
  createProductService,
  getProductsService,
  getProductService,
  updateProductService,
  deleteProductService,
} from "@/services/product.service";

import { successResponse } from "@/utils/apiResponse";

export const createProductController = asyncHandler(async (req) => {

  validateRequest(validateCreateProduct, req.body);

  const product = await createProductService(req.body);

  return successResponse(product, "Product created successfully");
});

export const getProductsController = asyncHandler(async (req) => {

  validateRequest(validateProductQuery, req.query);
  console.log("442",req.query);
  const result = await getProductsService(req.query);

  return successResponse(result);
});

export const getProductController = asyncHandler(async (req) => {
  const { id } =await req.params;
  const product = await getProductService(id);

  return successResponse(product);
});

export const updateProductController = asyncHandler(async (req) => {
  const { id } =await req.params;
  validateRequest(validateUpdateProduct, req.body);

  const product = await updateProductService(id, req.body);

  return successResponse(product, "Product updated successfully");
});

export const deleteProductController = asyncHandler(async (req) => {
    const { id } =await req.params;

  await deleteProductService(id);

  return successResponse(null, "Product deleted successfully");
});