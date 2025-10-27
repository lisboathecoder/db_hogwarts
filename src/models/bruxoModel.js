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

export const atualizar = async (id, data) => {
  return await prisma.bruxo.update({
    where: { id: Number(id) },
    data: {
      ...(data.name && { name: data.name }),
      ...(data.casa && { name: data.casa }),
      ...(data.patrono && { name: data.patrono }),
      ...(data.varinha && { name: data.varinha }),
      ...(data.anoMatricula && { name: data.anoMatricula }),
      ...(data.ativo !== undefined && { ativo: data.ativo})
    }
  })
}