export const handleError = (error) => {
  return {
    success: false,
    message: error.message || "Internal Server Error",
  };
};