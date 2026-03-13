import { NextResponse } from "next/server";
import {
  getProductsController,
  createProductController,
} from "@/controllers/product.controller";
import fs from "fs";
import path from "path";


import { errorMiddleware } from "@/middleware/errorMiddleware";
/**
 * @swagger  
 * /products:
 *   get:
 *     tags:
 *       - Product
 *     summary: Get all products with pagination, search, and filters
 *     description: Fetch a list of products with optional pagination, search, category, and subcategory filters.
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *             type: integer
 *             example: 1
 *             description: Page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *             type: integer
 *             example: 10
 *             description: Number of products per page
 *       - in: query
 *         name: search
 *         schema:
 *             type: string
 *             example: iphone
 *             description: Search products by name, description, category, or subcategory
 *       - in: query
 *         name: categoryId
 *         schema:
 *             type: string
 *             example: 64f1c4a9b23d4f1a9c123456
 *             description: Filter products by category ID
 *       - in: query
 *         name: subCategoryId
 *         schema:
 *             type: string
 *             example: 64f1c4a9b23d4f1a9c654321
 *             description: Filter products by subcategory ID
 *     responses:
 *       200:
 *         description: Products fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Products fetched successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     products:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                             example: 64f1c4a9b23d4f1a9c111111
 *                           name:
 *                             type: string
 *                             example: iPhone 15
 *                           description:
 *                             type: string
 *                             example: Latest Apple smartphone
 *                           price:
 *                             type: number
 *                             example: 999
 *                           category:
 *                             type: object
 *                           subCategory:
 *                             type: object
 *                     pagination:
 *                       type: object
 *                       properties:
 *                         page:
 *                           type: integer
 *                           example: 1
 *                         limit:
 *                           type: integer
 *                           example: 10
 *                         total:
 *                           type: integer
 *                           example: 120
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Internal Server Error
 */
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const query = Object.fromEntries(searchParams.entries());
    console.log("119",query);
    const result = await getProductsController({ query });
    console.log("121",result);
    return NextResponse.json(result);
  } catch (error) {
    
    return NextResponse.json(errorMiddleware(error), { status: 500 });
  }
}

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create product
 *     tags: [Product]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               categoryId:
 *                 type: string
 *               subCategoryId:
 *                 type: string
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *     responses:
 *       200:
 *         description: Product created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Product created successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: 64f1c4a9b23d4f1a9c111111
 *                     name:
 *                       type: string
 *                       example: iPhone 15 Pro
 *                     description:
 *                       type: string
 *                       example: Latest Apple smartphone
 *                     price:
 *                       type: number
 *                       example: 999
 *                     category:
 *                       type: object
 *                     subCategory:
 *                       type: object
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Internal Server Error
 */
export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const description = formData.get("description");
    const price = Number(formData.get("price"));
    const categoryId = formData.get("categoryId");
    const subCategoryId = formData.get("subCategoryId");

    const imageFiles = formData.getAll("images");

    const uploadDir = path.join(process.cwd(), "public/uploads");

    const imageUrls = [];

    for (const file of imageFiles) {

      if (!file || !file.name) continue;

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const fileName = Date.now() + "-" + file.name;

      const filePath = path.join(uploadDir, fileName);

      fs.writeFileSync(filePath, buffer);

      imageUrls.push(`/uploads/${fileName}`);
    }

    const result = await createProductController({
      body: {
        name,
        description,
        price,
        categoryId,
        subCategoryId,
        images: imageUrls,
      },
    });

    return NextResponse.json(result);

  } catch (error) {
    return NextResponse.json(errorMiddleware(error), { status: 500 });
  }
}