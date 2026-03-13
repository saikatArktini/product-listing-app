import { NextResponse } from "next/server";
import {
  getSubCategoriesController,
  createSubCategoryController,
} from "@/controllers/subcategory.controller";

import { errorMiddleware } from "@/middleware/errorMiddleware";
import { validateCreateSubCategory } from "@/validators/subcategory.validator";

/**
 * @swagger
 * /subcategories:
 *   get:
 *     tags:
 *       - Subcategory
 *     summary: Get all subcategories
 *     description: Get all subcategories
 *     responses:
 *       200:
 *         description: List of subcategories
 *       500:
 *         description: Internal Server Error
 */
export async function GET(req) {
  try {
    const result = await getSubCategoriesController(req);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(errorMiddleware(error), { status: 500 });
  }
}

/**
 * @swagger
 * /subcategories:
 *   post:
 *     tags:
 *       - Subcategory
 *     summary: Create a subcategory
 *     description: Create a subcategory
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
 *               categoryId:
 *                 type: string
 *                 description: The id of the category
 *             required:
 *               - name
 *               - categoryId
 *     responses:
 *       200:
 *         description: Subcategory created successfully
 *       500:
 *         description: Internal Server Error
 */
export async function POST(req) {
  try {
    const body = await req.json();

    // Validate input before creating
    validateCreateSubCategory(body);

    const result = await createSubCategoryController({ body });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(errorMiddleware(error), { status: 500 });
  }
}