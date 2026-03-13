import { asyncHandler } from "@/middleware/asyncHandler";
import { validateRequest } from "@/middleware/validateRequest";

import {
  validateCreateSubCategory,
  validateUpdateSubCategory,
} from "@/validators/subcategory.validator";

import {
  createSubCategoryService,
  getSubCategoriesService,
  getSubCategoryService,
  updateSubCategoryService,
  deleteSubCategoryService,
} from "@/services/subcategory.service";

import { successResponse } from "@/utils/apiResponse";

export const createSubCategoryController = asyncHandler(async (req) => {

  validateRequest(validateCreateSubCategory, req.body);

  const subCategory = await createSubCategoryService(req.body);

  return successResponse(subCategory, "SubCategory created successfully");
});

export const getSubCategoriesController = asyncHandler(async () => {

  const subCategories = await getSubCategoriesService();

  return successResponse(subCategories);
});

export const getSubCategoryController = asyncHandler(async (req) => {
 const {id} =await req.params
  const subCategory = await getSubCategoryService(id);

  return successResponse(subCategory);
});

export const updateSubCategoryController = asyncHandler(async (req) => {
  const {id} =await req.params
  validateRequest(validateUpdateSubCategory, req.body);

  const subCategory = await updateSubCategoryService(id, req.body);

  return successResponse(subCategory, "SubCategory updated successfully");
});

export const deleteSubCategoryController = asyncHandler(async (req) => {
  const {id} =await req.params
  await deleteSubCategoryService(id);

  return successResponse(null, "SubCategory deleted successfully");
});