import { NextResponse } from "next/server";
import {
  getCategoryController,
  updateCategoryController,
  deleteCategoryController,
} from "@/controllers/category.controller";

import { errorMiddleware } from "@/middleware/errorMiddleware";


/**
 * @swagger
 * /categories/{id}:
 *   get:
 *     tags:
 *       - Category
 *     summary: Get a category by id
 *     description: Get a category by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           id:
 *             type: string
 *             description: The id of the category
 *     responses:
 *       200:
 *         description: Category fetched successfully
 *       500:
 *         description: Internal Server Error
 */
export async function GET(req, { params }) {
  try {
    const result = await getCategoryController({ params });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(errorMiddleware(error), { status: 500 });
  }
}


/**
 * @swagger
 * /categories/{id}:
 *   put:
 *     tags:
 *       - Category
 *     summary: Update a category by id
 *     description: Update a category by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           id:
 *             type: string
 *             description: The id of the category
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the category
 *               description:
 *                 type: string
 *                 description: The description of the category
 *             required:
 *               - name
 *               - description
 *     responses:
 *       200:
 *         description: Category updated successfully
 *       500:
 *         description: Internal Server Error
 */
export async function PUT(req, { params }) {
  try {
    const body = await req.json();

    const result = await updateCategoryController({
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
 * /categories/{id}:
 *   delete:
 *     tags:
 *       - Category
 *     summary: Delete a category by id
 *     description: Delete a category by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           id:
 *             type: string
 *             description: The id of the category
 *     responses:
 *       200:
 *         description: Category deleted successfully
 *       500:
 *         description: Internal Server Error
 */
export async function DELETE(req, { params }) {
  try {
    const result = await deleteCategoryController({ params });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(errorMiddleware(error), { status: 500 });
  }
}