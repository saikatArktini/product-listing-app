export const successResponse = (data, message = "Success") => {
  return {
    success: true,
    message,
    data,
  };
};

export const errorResponse = (message = "Something went wrong") => {
  return {
    success: false,
    message,
  };
};