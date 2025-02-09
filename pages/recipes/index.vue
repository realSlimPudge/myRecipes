<template>
    <div class="py-10 min-h-[calc(100vh_-_50px)]">
        <h2
            class="text-6xl font-light text-green-500 text-center"
            :class="appearance ? 'appearance' : ''"
        >
            Каталог рецептов:
        </h2>
        <div
            class="grid grid-cols-2 w-2/4 mx-auto gap-y-4 gap-x-6 mt-10"
            :class="appearance ? 'appearance2' : ''"
        >
            <AsyncRecipeCard
                v-for="recipe in visibleRecipes"
                :key="recipe.id"
                :recipe="recipe"
            />
        </div>
        <div
            class="flex justify-center items-center mt-4 pb-10"
            v-show="loading"
            :class="appearance ? 'appearance2' : ''"
        >
            <div
                class="rounded-b-full animate-spin inset-0 border-4 border-green-500 border-t-transparent rounded-full w-15 h-15"
            ></div>
        </div>
        <div id="loadMore" class="min-h-[20px]"></div>
    </div>
</template>

<script lang="ts" setup>
const appearance = ref<boolean>(false);
const visibleRecipes = ref<any[]>([]);
const loading = ref<boolean>(false);
const allDataLoaded = ref<boolean>(false);
const page = ref<number>(0);
let observer: IntersectionObserver;

const AsyncRecipeCard = defineAsyncComponent({
    loader: () => import("@/components/RecipeCard.vue"),
});

const fetchRecipes = async (pageNum: number) => {
    loading.value = true;
    try {
        const res = await fetch(`/api/recipes?page=${pageNum}`);
        const newRecipes = await res.json();
        if (!Array.isArray(newRecipes) || newRecipes.length === 0) {
            allDataLoaded.value = true;
            observer.disconnect();
            return;
        }
        visibleRecipes.value = [...visibleRecipes.value, ...newRecipes];
    } catch (error) {
        console.error(error);
    } finally {
        loading.value = false;
    }
};

if (process.client) {
    observer = new IntersectionObserver(
        (entries) => {
            const entry = entries[0];

            if (
                entry.isIntersecting &&
                !loading.value &&
                !allDataLoaded.value
            ) {
                page.value += 1;
                fetchRecipes(page.value);
            }
        },
        { threshold: 0, rootMargin: "100px" }
    );
    onMounted(() => {
        fetchRecipes(page.value);
        const loadMoreElement = document.getElementById("loadMore");
        if (loadMoreElement) {
            observer.observe(loadMoreElement);
        }

        appearance.value = true;
        setTimeout(() => {
            appearance.value = false;
        }, 1500);
    });
}
</script>
