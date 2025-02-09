<template>
    <div class="py-10 min-h-[calc(100vh_-_50px)]">
        <div :class="appearance ? 'appearance' : ''">
            <p class="text-6xl font-light text-green-500 text-center">
                {{ showTitle }}
            </p>
        </div>
        <div class="mt-10" :class="appearance ? 'appearance2' : ''">
            <form
                @submit.prevent="handleSubmit"
                class="bg-white w-2/4 mx-auto rounded-2xl p-10 flex flex-col gap-y-10 justify-center items-center border-1 border-slate-200"
            >
                <div class="flex flex-col">
                    <label for="title" class="font-light text-xl mb-1 ml-2"
                        >Название рецепта:</label
                    >
                    <input
                        class="outline-0 border-1 border-slate-200 rounded-2xl p-3 py-2"
                        type="text"
                        id="title"
                        v-model="recipe.title"
                        placeholder="Введите название рецепта"
                        required
                    />
                </div>
                <div class="flex w-full gap-x-10">
                    <div class="flex flex-col w-full">
                        <label
                            for="ingredients"
                            class="ml-2 mb-1 text-xl font-light"
                            >Ингридиенты:</label
                        >
                        <textarea
                            class="w-full border-1 border-slate-200 h-40 p-3 outline-0 rounded-2xl resize-none"
                            type="text"
                            id="ingredients"
                            v-model="recipe.ingredients"
                            placeholder="Перечислите ингридиенты"
                            required
                        />
                    </div>
                    <div class="flex flex-col w-full">
                        <label
                            for="instructions"
                            class="ml-2 mb-1 text-xl font-light"
                            >Инструкция:</label
                        >
                        <textarea
                            class="w-full border-1 border-slate-200 h-40 p-3 outline-0 rounded-2xl resize-none"
                            type="text"
                            id="instructions"
                            v-model="recipe.instructions"
                            placeholder="Напишите краткую инструкцию"
                            required
                        />
                    </div>
                </div>
                <div class="flex w-full justify-between items-center">
                    <div class="flex flex-col justify-center items-center">
                        <label for="prep_time" class="mb-1 text-xl font-light"
                            >Время подготовки:</label
                        >
                        <input
                            class="w-2/4 outline-0 text-center border-1 border-slate-200 rounded-2xl p-3 text-2xl py-2"
                            type="number"
                            id="prep_time"
                            v-model="recipe.prep_time"
                            required
                        />
                    </div>
                    <div class="flex flex-col justify-center items-center">
                        <label for="cook_time" class="mb-1 text-xl font-light"
                            >Время приготовления:</label
                        >
                        <input
                            class="w-2/4 outline-0 text-center border-1 border-slate-200 rounded-2xl p-3 text-2xl py-2"
                            type="number"
                            id="cook_time"
                            v-model="recipe.cook_time"
                            required
                        />
                    </div>
                    <div class="flex flex-col justify-center items-center">
                        <label for="servings" class="mb-1 text-xl font-light"
                            >Количество порций:</label
                        >
                        <input
                            class="w-2/4 outline-0 text-center border-1 border-slate-200 rounded-2xl p-3 text-2xl py-2"
                            type="number"
                            id="servings"
                            v-model="recipe.servings"
                            required
                        />
                    </div>
                </div>
                <div>
                    <button
                        class="bg-green-500 text-white p-4 rounded-2xl text-2xl cursor-pointer px-6 font-semibold ease duration-300 hover:bg-green-400"
                    >
                        Загрузить
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script lang="ts" setup>
const appearance = ref<boolean>(false);

interface RecipeForm {
    title: string;
    ingredients: string;
    instructions: string;
    cook_time: number;
    prep_time: number;
    servings: number;
}

const recipe = ref<RecipeForm>({
    title: "",
    ingredients: "",
    instructions: "",
    cook_time: 0,
    prep_time: 0,
    servings: 0,
});

const showTitle = computed(() => {
    return recipe.value.title === "" ? "Ваш рецепт" : recipe.value.title;
});

const handleSubmit = async () => {
    console.log(recipe.value);
    try {
        const res = await $fetch("/api/create_recipe", {
            method: "POST",
            body: recipe.value,
        });
        recipe.value = {
            title: "",
            ingredients: "",
            instructions: "",
            prep_time: 0,
            cook_time: 0,
            servings: 0,
        };
    } catch (error) {
        console.error(error);
    }
};

onMounted(() => {
    appearance.value = true;
    setTimeout(() => {
        appearance.value = false;
    }, 1500);
});
</script>
