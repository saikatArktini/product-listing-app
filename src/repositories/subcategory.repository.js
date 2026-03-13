import { prisma } from "@/lib/prisma";

export const createSubCategory = async (data) => {
  return prisma.subCategory.create({
    data,
  });
};

export const getAllSubCategories = async () => {
  return prisma.subCategory.findMany({
    include: {
      category: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getSubCategoryById = async (id) => {
  return prisma.subCategory.findUnique({
    where: {
      id,
    },
    include: {
      category: true,
    },
  });
};

export const getSubCategoriesByCategory = async (categoryId) => {
  return prisma.subCategory.findMany({
    where: {
      categoryId,
    },
  });
};

export const updateSubCategory = async (id, data) => {
  return prisma.subCategory.update({
    where: {
      id,
    },
    data,
  });
};

export const deleteSubCategory = async (id) => {
  return prisma.subCategory.delete({
    where: {
      id,
    },
  });
};