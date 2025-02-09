import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (e) => {
    if (e.method === "GET") {
        const query = getQuery(e);
        const page = parseInt(query.page as string) || 0;
        try {
            const recipes = await prisma.recipes.findMany({
                skip: page * 14,
                take: 14,
                select: {
                    id: true,
                    title: true,
                    prep_time: true,
                    cook_time: true,
                },
            });
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
