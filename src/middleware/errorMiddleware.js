import { errorResponse } from "@/utils/apiResponse";

export const errorMiddleware = (error) => {
  return errorResponse(error.message || "Internal Server Error");
};