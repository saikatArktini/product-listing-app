import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Product Management API",
      version: "1.0.0",
      description: "API documentation for Product Management System",
    },
    servers: [
      {
        url: "/api",
        description: "Base API server",
      },
    ],
  },

  apis: ["./src/app/api/**/*.js"], // scan all API routes for Swagger comments
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;