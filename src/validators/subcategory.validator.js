export const validateCreateSubCategory = (body) => {
  const { name, categoryId } = body;

  if (!name) {
    throw new Error("SubCategory name is required");
  }

  if (typeof name !== "string") {
    throw new Error("SubCategory name must be a string");
  }

  if (!categoryId) {
    throw new Error("CategoryId is required");
  }
};

export const validateUpdateSubCategory = (body) => {
  const { name } = body;

  if (name && typeof name !== "string") {
    throw new Error("SubCategory name must be a string");
  }
};