import { NextResponse } from "next/server";
import {
  getProductController,
  updateProductController,
  deleteProductController,
} from "@/controllers/product.controller";

import { errorMiddleware } from "@/middleware/errorMiddleware";

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     tags:
 *       - Product
 *     summary: Get a product by id
 *     description: Get a product by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           id:
 *             type: string
 *             description: The id of the product
 *     responses:
 *       200:
 *         description: Product fetched successfully
 *       500:
 *         description: Internal Server Error
 */
export async function GET(req, { params }) {
  try {
    const result = await getProductController({ params });

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(errorMiddleware(error), { status: 500 });
  }
}

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     tags:
 *       - Product
 *     summary: Update a product by id
 *     description: Update a product by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           id:
 *             type: string
 *             description: The id of the product
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the product
 *               description:
 *                 type: string
 *                 description: The description of the product
 *               price:
 *                 type: number
 *                 description: The price of the product
 *               categoryId:
 *                 type: string
 *                 description: The id of the category
 *               subcategoryId:
 *                 type: string
 *                 description: The id of the subcategory
 *     responses:
 *       200:
 *         description: Product updated successfully
 *       500:
 *         description: Internal Server Error
 */
export async function PUT(req, { params }) {
  try {
    const body = await req.json();

    const result = await updateProductController({
      params,
      body,
    });

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(errorMiddleware(error), { status: 500 });
  }
}

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     tags:
 *       - Product
 *     summary: Delete a product by id
 *     description: Delete a product by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           id:
 *             type: string
 *             description: The id of the product
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *       500:
 *         description: Internal Server Error
 */
export async function DELETE(req, { params }) {
  try {
    const result = await deleteProductController({ params });

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(errorMiddleware(error), { status: 500 });
  }
}