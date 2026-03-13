import { prisma } from "@/lib/prisma";

export const createProduct = async (data) => {
  return prisma.product.create({
    data,
  });
};

export const getProductById = async (id) => {
  return prisma.product.findUnique({
    where: {
      id,
    },
    include: {
      category: true,
      subCategory: true,
    },
  });
};

export const updateProduct = async (id, data) => {
  return prisma.product.update({
    where: {
      id,
    },
    data,
  });
};

export const deleteProduct = async (id) => {
  return prisma.product.delete({
    where: {
      id,
    },
  });
};

/*
Main product listing query
Supports:
- pagination
- search
- category filter
- subcategory filter
*/

export const getProducts = async ({
  skip,
  take,
  search,
  categoryId,
  subCategoryId,
}) => {
    console.log("54",{ skip, take, search, categoryId, subCategoryId });
  return prisma.product.findMany({
    skip,
    take,

    where: {
      AND: [
        categoryId ? { categoryId } : {},
        subCategoryId ? { subCategoryId } : {},

        search
          ? {
              OR: [
                { name: { contains: search, mode: "insensitive" } },
                { description: { contains: search, mode: "insensitive" } },
                {
                  category: {
                    name: { contains: search, mode: "insensitive" },
                  },
                },
                {
                  subCategory: {
                    name: { contains: search, mode: "insensitive" },
                  },
                },
              ],
            }
          : {},
      ],
    },

    include: {
      category: true,
      subCategory: true,
    },

    orderBy: {
      createdAt: "desc",
    },
  });
};

export const countProducts = async ({ search, categoryId, subCategoryId }) => {
  return prisma.product.count({
    where: {
      AND: [
        categoryId ? { categoryId } : {},
        subCategoryId ? { subCategoryId } : {},

        search
          ? {
              OR: [
                { name: { contains: search, mode: "insensitive" } },
                { description: { contains: search, mode: "insensitive" } },
                {
                  category: {
                    name: { contains: search, mode: "insensitive" },
                  },
                },
                {
                  subCategory: {
                    name: { contains: search, mode: "insensitive" },
                  },
                },
              ],
            }
          : {},
      ],
    },
  });
};