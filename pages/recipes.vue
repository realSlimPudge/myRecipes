<template>
    <div>
        <h2 class="text-6xl font-bold text-green-400">Каталог рецептов:</h2>
        <div class="grid grid-cols-2 w-[1600px] mx-auto gap-y-5 mt-5">
            <RecipeCard
                v-for="recipe in data"
                :key="recipe.id"
                :recipe="recipe"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
const { data, status, error, refresh, clear } = await useFetch("/api/recipes");
</script>
