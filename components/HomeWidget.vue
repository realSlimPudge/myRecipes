<template>
	<div
		class="w-[1200px] h-[900px] flex mx-auto items-center justify-between gap-x-10"
	>
		<div
			class="rounded-3xl bg-slate-200 w-2/3 h-1/3 flex flex-col px-5 py-5 justify-between items-center"
		>
			<p class="text-xl">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
				dolores consequatur in sed deserunt, doloribus aliquid odit? Vel
				nisi libero fugit, quae commodi ea repudiandae vitae laborum,
				recusandae deserunt quaerat reiciendis totam soluta placeat,
				reprehenderit laudantium atque necessitatibus magnam minus
				harum? Vel unde, rerum atque labore soluta blanditiis corporis
				deserunt, adipisci officiis iste itaque voluptates est minima,
				et accusantium in.
			</p>
			<NuxtLink
				to="/recipes"
				class="bg-green-700 text-white px-3 py-3 rounded-2xl font-bold w-[200px] text-center transition-all ease duration-150 hover:bg-green-600"
				>Перейти к рецептам</NuxtLink
			>
		</div>

		<div
			class="w-[500px] h-[500px] ease duration-300 transition-all hover:scale-105"
			@click="click"
		>
			<div class="text-center text-3xl text-green-700 font-bold">
				{{ clicker }}
			</div>
			<img
				src="/img/pizza.png"
				alt="pizza"
				class="w-full h-full object-contain animation"
				:class="animation ? 'scale-[110%]' : ''"
			/>
		</div>
	</div>
</template>

<script lang="ts" setup>
const clicker = ref(0)
const animation = ref(false)

const click = () => {
	clicker.value++
	animation.value = true
}
</script>
