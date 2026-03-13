import { NextResponse } from "next/server";
import {
  createCategoryController,
  getCategoriesController,
} from "@/controllers/category.controller";
import { errorMiddleware } from "@/middleware/errorMiddleware";


/**
 * @swagger
 * /categories:
 *   get:
 *     tags:
 *       - Category
 *     summary: Get all categories
 *     description: Get all categories
 *     responses:
 *       200:
 *         description: List of categories
 *       500:
 *         description: Internal Server Error
 */
export async function GET(req) {
  try {
    const result = await getCategoriesController(req);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(errorMiddleware(error), { status: 500 });
  }
}

/**
 * @swagger
 * /categories:
 *   post:
 *     tags:
 *       - Category
 *     summary: Create a category
 *     description: Create a category
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
 *         description: Category created successfully
 *       500:
 *         description: Internal Server Error
 */
export async function POST(req) {
  try {
    const body = await req.json();

    const result = await createCategoryController({ body });

    return NextResponse.json(result);
  } catch (error) {
    console.log("19",error.message);
    return NextResponse.json(errorMiddleware(error), { status: 500 });
  }
}