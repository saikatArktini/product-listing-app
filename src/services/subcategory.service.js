import {
  createSubCategory,
  getAllSubCategories,
  getSubCategoryById,
  updateSubCategory,
  deleteSubCategory,
  getSubCategoriesByCategory,
} from "@/repositories/subcategory.repository";

export const createSubCategoryService = async (data) => {
  return await createSubCategory(data);
};

export const getSubCategoriesService = async () => {
  return await getAllSubCategories();
};

export const getSubCategoryService = async (id) => {
  return await getSubCategoryById(id);
};

export const getSubCategoriesByCategoryService = async (categoryId) => {
  return await getSubCategoriesByCategory(categoryId);
};

export const updateSubCategoryService = async (id, data) => {
  return await updateSubCategory(id, data);
};

export const deleteSubCategoryService = async (id) => {
  return await deleteSubCategory(id);
};