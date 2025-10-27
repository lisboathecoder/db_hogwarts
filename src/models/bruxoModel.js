// é no model que fazemos a consulta para o bd
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const findAll = async () => {
  return await prisma.bruxo.findMany({
    orderBy: { id: "asc" },
  });
};

export const findOne = async (id) => {
  return await prisma.bruxo.findUnique({
    where: { id: Number(id) },
  });
};

export const create = async (data) => {
  return await prisma.bruxo.create({
    data: {
      name: data.name,
      casa: data.casa,
      patrono: data.patrono,
      varinha: data.varinha,
      anoMatricula: data.anoMatricula,
    },
  });
};

export const deletar = async (id) => {
  return await prisma.bruxo.delete({
    where: { id: Number(id) },
  });
};
