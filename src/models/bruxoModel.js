// é no model que fazemos a consulta para o bd
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const findAll = async () => {
    return await prisma.bruxo.findMany({
        orderBy: { name: 'asc' }
    });
}

export const findOne = async (id) => {
    // SELECT * FROM bruxos WHERE id = 1;
    return await prisma.bruxo.findUnique({
        where: { id: Number(id) }
    });
}