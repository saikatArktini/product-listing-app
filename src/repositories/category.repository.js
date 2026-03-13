import { prisma } from "@/lib/prisma";

export const createCategory = async (data) => {
  return prisma.category.create({
    data,
  });
};

export const getAllCategories = async () => {
  return prisma.category.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getCategoryById = async (id) => {
  return prisma.category.findUnique({
    where: {
      id,
    },
  });
};

export const updateCategory = async (id, data) => {
  return prisma.category.update({
    where: {
      id,
    },
    data,
  });
};

export const deleteCategory = async (id) => {
  return prisma.category.delete({
    where: {
      id,
    },
  });
};