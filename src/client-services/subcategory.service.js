import { apiClient } from "./apiClient";

export async function getSubcategories(categoryId) {
  const query = categoryId ? `?categoryId=${categoryId}` : "";

  return apiClient(`/subcategories${query}`);
}