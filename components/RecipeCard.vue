<template>
    <div
        class="flex justify-between items-center w-full bg-white p-6 rounded-4xl border-1 border-slate-200 ease duration-400 hover:border-green-500 group"
    >
        <div>
            <p class="text-green-400 cursor-pointer text-xl font-semibold">
                {{ recipe.title }}
            </p>

            <p>Время: {{ recipe.cook_time + recipe.prep_time }} мин.</p>
        </div>
        <div>
            <NuxtLink
                class="text-green-400 cursor-pointer text-2xl font-bold border-1 border-slate-300 ease duration-600 rounded-2xl px-4.5 py-3 group-hover:border-green-500 group-hover:bg-green-400 group-hover:text-white"
                :to="`/recipes/${recipe.id}`"
                >></NuxtLink
            >
        </div>
    </div>
</template>

<script lang="ts" setup>
interface Props {
    recipe: {
        id: number;
        title: string;
        prep_time: any;
        cook_time: any;
    };
}

defineProps<Props>();
</script>
