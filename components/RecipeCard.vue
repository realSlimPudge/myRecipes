<template>
    <div>
        <NuxtLink
            class="text-green-400 cursor-pointer"
            :to="`/recipes/${recipe.id}`"
            >{{ recipe.title }}</NuxtLink
        >
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
