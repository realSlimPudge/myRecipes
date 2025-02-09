import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (e) => {
    const { id } = e.context.params;
    try {
        const recipe = await prisma.recipes.findUnique({
            where: {
                id: parseInt(id),
            },
        });

        if (recipe) {
            return recipe;
        } else {
            throw createError({ statusCode: 404, message: "Recipe not found" });
        }
    } catch (error: any) {
        throw createError({ statusCode: 500, message: error.message });
    }
});
