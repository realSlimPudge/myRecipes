<template>
	<div class="min-h-[calc(100vh_-_50px)] max-h-fit pt-10">
		<h2
			class="text-6xl font-light text-green-500 text-center"
			:class="appearance ? 'appearance' : ''"
		>
			Избранное
		</h2>
		<div
			class="mx-auto mt-10 w-2/4 flex flex-col gap-x-3 gap-y-8 pb-10"
			:class="appearance ? 'appearance2' : ''"
		>
			<FavoriteCard
				v-if="favorites.favorite.length"
				v-for="favorite in favorites.favorite"
				:recipe="favorite"
				:key="favorite.id"
			/>
			<div v-else>
				<p class="text-center text-2xl text-slate-400">
					Вы не добавили ни один рецепт в избранное.
				</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
const appearance = ref(false)
onMounted(() => {
	appearance.value = true
	setTimeout(() => {
		appearance.value = false
	}, 1500)
})

const favorites = useFavoriteStore()
</script>
