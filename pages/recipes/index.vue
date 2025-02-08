<template>
	<div>
		<h2 class="text-6xl font-bold text-green-400">Каталог рецептов:</h2>
		<RecipeCard v-for="recipe in data" :key="recipe.id" :recipe="recipe" />
	</div>
</template>

<script lang="ts" setup>
const { data, status, error, refresh, clear } = await useFetch('/api/recipes')
</script>
