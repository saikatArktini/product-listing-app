import {
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  getProducts,
  countProducts,
} from "@/repositories/product.repository";

import { getPagination } from "@/utils/pagination";

export const createProductService = async (data) => {
  return await createProduct(data);
};

export const getProductService = async (id) => {
  return await getProductById(id);
};

export const updateProductService = async (id, data) => {
  return await updateProduct(id, data);
};

export const deleteProductService = async (id) => {
  return await deleteProduct(id);
};

export const getProductsService = async (query) => {
  const { page, limit, search, category,categoryId, subcategory, subCategoryId } = query;
  const finalCategoryId = categoryId || category;
  const finalSubCategoryId = subCategoryId || subcategory;
  console.log("440", { page, limit, search, finalCategoryId, finalSubCategoryId });
  const { skip, limit: take, page: currentPage } = getPagination(page, limit);

  const products = await getProducts({
    skip,
    take,
    search,
    categoryId: finalCategoryId,
    subCategoryId: finalSubCategoryId,
  });
  //console.log("40", products);
  const totalCount = await countProducts({
    search,
    categoryId: finalCategoryId,
    subCategoryId: finalSubCategoryId,
  });

  const totalPages = Math.ceil(totalCount / take);

  return {
    products,
    totalCount,
    totalPages,
    currentPage,
  };
};