import { NextResponse } from "next/server";
import {
  getSubCategoryController,
  updateSubCategoryController,
  deleteSubCategoryController,
} from "@/controllers/subcategory.controller";

import { errorMiddleware } from "@/middleware/errorMiddleware";
import { validateUpdateSubCategory } from "@/validators/subcategory.validator";

/**
 * @swagger
 * /subcategories/{id}:
 *   get:
 *     tags:
 *       - Subcategory
 *     summary: Get a subcategory by id
 *     description: Get a subcategory by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           id:
 *             type: string
 *             description: The id of the subcategory
 *     responses:
 *       200:
 *         description: Subcategory
 *       500:
 *         description: Internal Server Error
 */
export async function GET(req, { params }) {
  try {
    const result = await getSubCategoryController({ params });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(errorMiddleware(error), { status: 500 });
  }
}

/**
 * @swagger
 * /subcategories/{id}:
 *   put:
 *     tags:
 *       - Subcategory
 *     summary: Update a subcategory by id
 *     description: Update a subcategory by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           id:
 *             type: string
 *             description: The id of the subcategory
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the subcategory
 *             required:
 *               - name
 *     responses:
 *       200:
 *         description: Subcategory updated successfully
 *       500:
 *         description: Internal Server Error
 */
export async function PUT(req, { params }) {
  try {
    const body = await req.json();

    // Validate update input
    validateUpdateSubCategory(body);

    const result = await updateSubCategoryController({ params, body });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(errorMiddleware(error), { status: 500 });
  }
}

/**
 * @swagger
 * /subcategories/{id}:
 *   delete:
 *     tags:
 *       - Subcategory
 *     summary: Delete a subcategory by id
 *     description: Delete a subcategory by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           id:
 *             type: string
 *             description: The id of the subcategory
 *     responses:
 *       200:
 *         description: Subcategory deleted successfully
 *       500:
 *         description: Internal Server Error
 */
export async function DELETE(req, { params }) {
  try {
    const result = await deleteSubCategoryController({ params });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(errorMiddleware(error), { status: 500 });
  }
}