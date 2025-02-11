<template>
	<div class="relative group" :class="removeAnimation ? 'remove' : ''">
		<div
			class="absolute transform translate-y-[-50%] top-[50%] left-[95%] opacity-0 ease duration-200 delay-200 group-hover:left-[100%] group-hover:opacity-100 pl-10 py-10"
		>
			<button
				class="border-1 ease duration-200 rounded-2xl cursor-pointer p-3 text-red-500 border-red-500 hover:bg-red-500 hover:text-white"
				@click="handleRemove(recipe.id)"
			>
				Удалить
			</button>
		</div>

		<NuxtLink :to="`/recipes/${recipe.id}`">
			<div
				class="bg-white rounded-2xl p-6 flex flex-col gap-y-4 ease duration-300 border-1 border-white hover:border-green-500"
			>
				<div>
					<h3 class="text-center text-3xl text-green-500">
						{{ recipe.title }}
					</h3>
				</div>
				<div class="flex flex-col gap-y-2">
					<p>
						<span class="font-semibold">Ингредиенты:</span>
						{{ recipe.ingredients }}
					</p>
					<p>
						<span class="font-semibold">Инструкция:</span>
						{{ recipe.instructions }}
					</p>
				</div>
				<div class="flex justify-between">
					<div>
						<span class="font-semibold">Время готовки:</span>
						{{ recipe.cook_time }} мин.
					</div>
					<div>
						<span class="font-semibold">Время подготовки:</span>
						{{ recipe.prep_time }} мин.
					</div>
					<div>
						<span class="font-semibold">Кол-во порций:</span>
						{{ recipe.servings }} шт.
					</div>
				</div>
			</div>
		</NuxtLink>
	</div>
</template>

<script lang="ts" setup>
const favorites = useFavoriteStore()

const removeAnimation = ref(false)

interface Props {
	recipe: {
		id: number
		title: string
		ingredients: string
		instructions: string
		prep_time: number
		cook_time: number
		servings: number
	}
}
defineProps<Props>()

const handleRemove = (id: number) => {
	removeAnimation.value = true
	setTimeout(() => {
		favorites.removeFavorite(id)
		removeAnimation.value = false
	}, 500)
}
</script>
