<template>
	<div class="w-3/4 h-[800px] mx-auto mt-10 flex flex-col gap-y-10">
		<div class="text-center">
			<NuxtLink
				to="/recipes"
				class="text-green-700 font-semibold text-xl"
			>
				< Рецепты
			</NuxtLink>

			<p class="text-6xl font-bold text-center">{{ data?.title }}</p>
		</div>
		<div class="h-3/4 flex">
			<div class="bg-amber-400 w-2/4 h-full overflow-hidden rounded-2xl">
				<img src="" alt="food" />
			</div>
			<div
				class="h-full w-2/4 bg-white rounded-br-2xl rounded-tr-2xl p-7 gap-y-14 flex flex-col"
			>
				<div>
					<p class="text-2xl font-semibold">Ингридиенты:</p>
					<p class="text-xl">{{ data?.ingredients }}</p>
				</div>
				<div>
					<p class="text-2xl font-semibold">Инструкция по готовке:</p>
					<p class="text-xl">{{ data?.instructions }}</p>
				</div>
				<div class="w-full mx-auto flex justify-between">
					<div>
						<span class="font-semibold text-xl"
							>Время подготовки:</span
						>
						<br />
						{{ data?.prep_time }} мин.
					</div>
					<div>
						<span class="font-semibold text-xl"
							>Время готовки:</span
						>
						<br />
						{{ data?.cook_time }} мин.
					</div>
					<div>
						<span class="font-semibold text-xl"
							>Кол-во порций: </span
						><br />
						{{ data?.servings }} шт.
					</div>
				</div>
				<div class="w-full flex justify-end">
					<div class="h-fit w-fit">
						<button
							class="h-[100px] w-[100px] bg-green-400 rounded-2xl text-5xl text-white font-bold ease duration-300 transition-all cursor-pointer hover:w-[250px]"
						>
							>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
const route = useRoute()

const { data, status, error } = useFetch(`/api/recipes/${route.params.id}`)
</script>
