<template>
    <div
        class="text-slate-500 flex justify-between w-full h-[50px] items-center px-50 bg-white"
    >
        <h1 class="text-3xl font-regular text-green-500 uppercase">
            <NuxtLink to="/">My Recipes</NuxtLink>
        </h1>
        <nav class="gap-x-10 flex">
            <NuxtLink
                to="/"
                class="text-[18px] font-light uppercase ease duration-500 hover:text-green-500"
                >Главная страница</NuxtLink
            >
            <NuxtLink
                to="/recipes"
                class="text-[18px] font-light uppercase ease duration-500 hover:text-green-500"
                >Рецепты</NuxtLink
            >
            <NuxtLink
                to="/create_recipe"
                class="text-[18px] font-light uppercase ease duration-500 hover:text-green-500"
                >Создать рецепт</NuxtLink
            >
        </nav>
    </div>
</template>

<script lang="ts" setup></script>
