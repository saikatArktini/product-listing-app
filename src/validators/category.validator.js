export const validateCreateCategory = (body) => {
  const { name } = body;

  if (!name) {
    throw new Error("Category name is required");
  }

  if (typeof name !== "string") {
    throw new Error("Category name must be a string");
  }

  if (name.trim().length < 2) {
    throw new Error("Category name must be at least 2 characters");
  }
};

export const validateUpdateCategory = (body) => {
  const { name } = body;

  if (name && typeof name !== "string") {
    console.log("21",name);
    throw new Error("Category name must be a string");
  }
};