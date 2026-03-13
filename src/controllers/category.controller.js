import { asyncHandler } from "@/middleware/asyncHandler";
import { validateRequest } from "@/middleware/validateRequest";

import {
  validateCreateCategory,
  validateUpdateCategory,
} from "@/validators/category.validator";

import {
  createCategoryService,
  getCategoriesService,
  getCategoryService,
  updateCategoryService,
  deleteCategoryService,
} from "@/services/category.service";

import { successResponse } from "@/utils/apiResponse";

export const createCategoryController = asyncHandler(async (req) => {

  validateRequest(validateCreateCategory, req.body);

  const category = await createCategoryService(req.body);

  return successResponse(category, "Category created successfully");
});

export const getCategoriesController = asyncHandler(async () => {

  const categories = await getCategoriesService();

  return successResponse(categories);
});

export const getCategoryController = asyncHandler(async (req) => {

    //("7",req.params.id);
    const { id } =await req.params;
  const category = await getCategoryService(id);

  return successResponse(category);
});

export const updateCategoryController = asyncHandler(async (req) => {

  const validateRequest1 = await validateRequest(validateUpdateCategory, req.body);
  ("47",validateRequest1);
  const { id } =await req.params;
  const category = await updateCategoryService(id, req.body);

  return successResponse(category, "Category updated successfully");
});

export const deleteCategoryController = asyncHandler(async (req) => {
  const { id } =await req.params;
  const deletedCategory = await deleteCategoryService(id);

  return successResponse(deletedCategory, "Category deleted successfully");
});