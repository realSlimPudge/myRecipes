<template>
    <div
        class="bg-green-500 text-white flex justify-between w-full h-[50px] items-center px-7"
    >
        <h1 class="text-3xl font-bold">
            <NuxtLink to="/">My Recipes</NuxtLink>
        </h1>
        <nav class="gap-x-10 flex">
            <NuxtLink to="/" class="text-xl font-semibold"
                >Главная страница</NuxtLink
            >
            <NuxtLink to="/recipes" class="text-xl font-semibold"
                >Рецепты</NuxtLink
            >
        </nav>
    </div>
</template>

<script lang="ts" setup></script>
