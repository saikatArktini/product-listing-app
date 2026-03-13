export const validateCreateProduct = (body) => {
  const {
    name,
    description,
    price,
    categoryId,
    subCategoryId,
    images,
  } = body;
  console.log("10 images", images);
  if (!name) {
    throw new Error("Product name is required");
  }

  if (typeof name !== "string") {
    throw new Error("Product name must be a string");
  }

  if (!description) {
    throw new Error("Description is required");
  }

  if (price === undefined) {
    throw new Error("Price is required");
  }

  if (typeof price !== "number") {
    throw new Error("Price must be a number");
  }

  if (!categoryId) {
    throw new Error("CategoryId is required");
  }

  if (!subCategoryId) {
    throw new Error("SubCategoryId is required");
  }

  if (!Array.isArray(images) || images.length === 0) {
  throw new Error("At least one image is required");
}

if (images.some((img) => !img || img.includes("undefined"))) {
  throw new Error("Invalid image upload");
}
};

export const validateUpdateProduct = (body) => {
  const { price, images } = body;

  if (price && typeof price !== "number") {
    throw new Error("Price must be a number");
  }

  if (images && !Array.isArray(images)) {
    throw new Error("Images must be an array");
  }
};
export const validateProductQuery = (query) => {
  let { page, limit, search, categoryId, subCategoryId } = query;

  if (page && isNaN(Number(page))) {
    throw new Error("Page must be a number");
  }

  if (limit && isNaN(Number(limit))) {
    throw new Error("Limit must be a number");
  }

  if (limit && Number(limit) > 100) {
    throw new Error("Limit cannot exceed 100");
  }

  if (search && typeof search !== "string") {
    throw new Error("Search must be a string");
  }

  if (categoryId && typeof categoryId !== "string") {
    throw new Error("CategoryId must be a string");
  }

  if (subCategoryId && typeof subCategoryId !== "string") {
    throw new Error("SubCategoryId must be a string");
  }
};