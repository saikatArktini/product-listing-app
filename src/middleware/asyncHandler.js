export const asyncHandler = (controller) => {
    console.log("2",controller);
  return async (req, res) => {
    try {
      return await controller(req, res);
    } catch (error) {
      console.log("7",error);
      throw error;
    }
  };
};