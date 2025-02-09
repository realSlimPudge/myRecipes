import { PrismaClient } from "@prisma/client";
import { readBody } from "h3";

const prisma = new PrismaClient();

export default defineEventHandler(async (e) => {
    if (e.req.method !== "POST") {
        throw createError({
            statusCode: 405,
            statusMessage: "Метод не разрешен",
        });
    }
    const body = await readBody(e);

    if (
        !body.title ||
        !body.ingredients ||
        !body.instructions ||
        body.cook_time === undefined ||
        body.prep_time === undefined ||
        body.servings === undefined
    ) {
        throw createError({
            statusCode: 400,
            statusMessage: "Отсутсвуют необходимые поля",
        });
    }

    try {
        const newRecipe = await prisma.recipes.create({
            data: {
                title: body.title,
                ingredients: body.ingredients,
                instructions: body.instructions,
                cook_time: Number(body.cook_time),
                prep_time: Number(body.prep_time),
                servings: Number(body.servings),
            },
        });
        return newRecipe;
    } catch (error) {
        console.error("Ошибка при добавлении рецепта", error);
        throw createError({
            statusCode: 500,
            statusMessage: "Ошибка сервера" + error.message,
        });
    }
});
