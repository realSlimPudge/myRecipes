import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (e) => {
    if (e.method === "GET") {
        try {
            const recipes = await prisma.recipes.findMany();
            return recipes;
        } catch (error: any) {
            console.error("Ошибка:", error);
            throw createError({
                statusCode: 500,
                statusMessage: "Ошибка на сервере: " + error.message,
            });
        }
    }
});
