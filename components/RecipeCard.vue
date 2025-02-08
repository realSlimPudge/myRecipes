<template>
    <div
        class="bg-slate-300 rounded-4xl h-[300px] w-[750px] p-2 flex items-center justify-between gap-x-5"
    >
        <div class="w-full h-full overflow-hidden rounded-3xl">
            <img
                class="object-full w-full h-full"
                src="/img/papardelle-s-lososem_1561617249_1_max.jpg"
                alt="Naperdeli"
            />
        </div>
        <div class="w-full">
            <p class="text-center text-xl font-bold">{{ recipe.title }}</p>
            <div>
                <p>Ингридиенты:</p>
                <p>{{ recipe.ingredients }}</p>
            </div>
            <div>
                <p>Интсрукция по готовке:</p>
                <p>{{ recipe.instructions }}</p>
            </div>
            <div>
                Время подготовки: {{ recipe.prep_time }} мин. Время готовки:
                {{ recipe.cook_time }} мин.
            </div>

            <div>Кол-во порций: {{ recipe.servings }}</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
interface Props {
    recipe: {
        id: number;
        title: string;
        ingredients: string;
        instructions: string;
        prep_time: number;
        cook_time: number;
        servings: number;
    };
}
defineProps<Props>();
</script>
