<template>
    <div class="pb-[170px] flex flex-col items-center gap-y-6">
        <div class="grid grid-cols-2 gap-x-12 gap-y-10 w-3/4 mx-auto">
            <MiniDescription
                name="Разнообразие рецептов:"
                description="Мы предлагаем рецепты из разных кухонь мира, чтобы каждый мог найти что-то по своему вкусу."
            />

            <MiniDescription
                name="Фильтры и категории:"
                description="Легко находите рецепты по категориям, ингредиентам или сложности приготовления."
            />
            <MiniDescription
                name="Отзывы и рейтинги:"
                description="Делитесь своими впечатлениями и помогайте другим пользователям выбирать лучшие рецепты."
            />
            <MiniDescription
                name="Блог и советы:"
                description="Читайте статьи о кулинарных трендах, полезных советах и секретах приготовления."
            />

            <MiniDescription
                class="col-span-2"
                name="Пошаговые инструкции:"
                description="Каждый рецепт сопровождается подробным описанием и фотографиями, чтобы процесс приготовления был простым и понятным."
            />
        </div>
        <NuxtLink
            to="/recipes"
            class="text-2xl bg-green-500 text-white px-5 py-3 rounded-2xl font-bold w-fit text-center transition-all ease duration-150 hover:bg-green-400"
            >Перейти к рецептам</NuxtLink
        >
    </div>
</template>

<script lang="ts" setup></script>
