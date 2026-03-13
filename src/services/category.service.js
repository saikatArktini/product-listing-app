import {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "@/repositories/category.repository";

export const createCategoryService = async (data) => {
  return await createCategory(data);
};

export const getCategoriesService = async () => {
  return await getAllCategories();
};

export const getCategoryService = async (id) => {
  return await getCategoryById(id);
};

export const updateCategoryService = async (id, data) => {
  return await updateCategory(id, data);
};

export const deleteCategoryService = async (id) => {
  return await deleteCategory(id);
};