<template>
    <div
        class="w-3/4 h-[calc(100vh_-_90px)] mx-auto mt-10 flex flex-col gap-y-10"
    >
        <div class="text-center" :class="appearance ? 'appearance' : ''">
            <NuxtLink
                to="/recipes"
                class="text-slate-500 font-light text-xl ease duration-300 hover:text-slate-400"
            >
                < Рецепты
            </NuxtLink>

            <p class="text-6xl font-light text-green-500 text-center">
                {{ recipe?.title }}
            </p>
        </div>
        <div class="h-3/4 flex" :class="appearance ? 'appearance2' : ''">
            <div class="w-2/4 h-full overflow-hidden rounded-2xl relative">
                <div
                    v-if="imgLoading"
                    class="flex w-full h-full justify-center items-center bg-slate-200"
                >
                    <div
                        class="rounded-b-full animate-spin inset-0 border-4 border-green-500 border-t-transparent rounded-full w-20 h-20"
                    ></div>
                </div>
                <img
                    src="https://picsum.photos/1200"
                    @load="imgLoad"
                    alt=""
                    class="w-full h-full object-cover transform translate-[-50%] absolute top-[50%] left-[50%] ease duration-300 hover:scale-110"
                />
            </div>
            <div
                class="h-full w-2/4 bg-white rounded-br-2xl rounded-tr-2xl p-7 gap-y-14 flex flex-col justify-center"
            >
                <div class="group">
                    <p
                        class="text-2xl font-semibold ease duration-200 transform group-hover:text-green-500 group-hover:translate-x-2"
                    >
                        Ингридиенты:
                    </p>
                    <p class="text-xl">
                        {{ recipe?.ingredients }}
                    </p>
                    <hr
                        class="bg-green-500 h-[1px] border-0 w-0 ease duration-300 mt-2 group-hover:w-full"
                    />
                </div>
                <div class="group">
                    <p
                        class="text-2xl font-semibold ease duration-200 transform group-hover:text-green-500 group-hover:translate-x-2"
                    >
                        Инструкция по готовке:
                    </p>
                    <p class="text-xl">{{ recipe?.instructions }}</p>
                    <hr
                        class="bg-green-500 h-[1px] border-0 w-0 ease duration-300 mt-2 group-hover:w-full"
                    />
                </div>
                <div class="w-full mx-auto flex justify-between">
                    <div class="group">
                        <p
                            class="font-semibold text-xl ease duration-200 transform group-hover:text-green-500 group-hover:translate-x-2"
                        >
                            Время подготовки:
                        </p>

                        {{ recipe?.prep_time }} мин.
                        <hr
                            class="bg-green-500 h-[1px] border-0 w-0 ease duration-300 mt-2 group-hover:w-full"
                        />
                    </div>
                    <div class="group">
                        <p
                            class="font-semibold text-xl ease duration-200 transform group-hover:text-green-500 group-hover:translate-x-2"
                        >
                            Время готовки:
                        </p>

                        {{ recipe?.cook_time }} мин.
                        <hr
                            class="bg-green-500 h-[1px] border-0 w-0 ease duration-300 mt-2 group-hover:w-full"
                        />
                    </div>
                    <div class="group">
                        <p
                            class="font-semibold text-xl ease duration-200 transform group-hover:text-green-500 group-hover:translate-x-2"
                        >
                            Кол-во порций:
                        </p>

                        {{ recipe?.servings }} шт.
                        <hr
                            class="bg-green-500 h-[1px] border-0 w-0 ease duration-300 mt-2 group-hover:w-full"
                        />
                    </div>
                </div>
                <div class="w-full flex justify-end">
                    <div class="h-fit w-fit">
                        <button
                            class="group h-[100px] w-[100px] bg-green-500 rounded-2xl text-5xl text-white font-bold ease duration-400 transition-all cursor-pointer relative hover:w-[450px] btn__before"
                        >
                            <span
                                class="ease duration-200 delay-[120ms] group-hover:opacity-0"
                                >></span
                            >
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const { data: recipe } = useFetch(`/api/recipes/${route.params.id}`);
const imgLoading = ref(true);
const appearance = ref(false);

onMounted(() => {
    appearance.value = true;
    setTimeout(() => {
        appearance.value = false;
    }, 1500);
});

const imgLoad = () => {
    imgLoading.value = false;
};
</script>
