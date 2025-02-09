<template>
    <section
        class="w-[1200px] h-[900px] flex mx-auto items-center justify-between gap-x-10"
    >
        <div
            class="flex flex-col items-center justify-center w-4/5"
            :class="appearance ? 'appearance' : ''"
        >
            <p
                class="text-center text-white bg-green-500 text-xl w-2/3 rounded-t-2xl py-4 px-2 font-bold"
            >
                Добро пожаловать на наш сайт, посвящённый кулинарным рецептам!
            </p>
            <div
                class="rounded-b-2xl bg-white w-2/3 h-fit flex flex-col px-5 py-4 justify-between items-center relative font-light border-1 border-green-300 border-t-0"
            >
                <p class="text-2xl text-center text-green-600">
                    Здесь вы найдёте разнообразные блюда на любой вкус: от
                    традиционных до современных, от простых до изысканных.
                </p>
            </div>
        </div>
        <div
            class="w-[500px] h-[500px] ease duration-300 transition-all relative"
            @click="click"
            :class="[
                appearance ? 'appearance' : '',
                animation ? 'scale-[110%]' : '',
            ]"
        >
            <div
                class="text-center text-2xl font-light absolute transform translate-x-[-50%] left-[50%] w-full"
                v-if="clicker > 0"
            >
                <span v-if="target === 'pizza'">Количество пицц:</span>
                <span v-if="target === 'burger'">Количество бургеров:</span>
                <span v-if="target === 'borsch'">Количество борщей:</span>
                <span
                    class="font-bold ease duration-[50ms] ml-2"
                    :class="animation ? 'text-green-500' : ''"
                    >{{ clicker }}</span
                >
            </div>
            <img
                v-if="target === 'pizza'"
                src="/img/pizza.png"
                alt="pizza"
                draggable="false"
                class="w-full h-full object-contain animation ease duration-100 cursor-pointer"
            />
            <img
                v-else-if="target === 'burger'"
                src="/img/burger.png"
                alt="pizza"
                draggable="false"
                class="w-full h-full object-contain animation ease duration-100 cursor-pointer"
            />
            <img
                v-else-if="target === 'borsch'"
                src="/img/borsch.png"
                alt="pizza"
                draggable="false"
                class="w-full h-full object-contain animation ease duration-100 cursor-pointer"
            />
        </div>
    </section>
</template>

<script lang="ts" setup>
const clicker = ref<number>(0);
const animation = ref<boolean>(false);
const appearance = ref<boolean>(false);
const target = ref<string>("pizza");

watchEffect(() => {
    if (clicker.value < 10) {
        target.value = "pizza";
    } else if (clicker.value >= 10 && clicker.value < 20) {
        target.value = "burger";
    } else if (clicker.value >= 20) {
        target.value = "borsch";
    }
});

const click = () => {
    clicker.value++;
    animation.value = true;
    setTimeout(() => {
        animation.value = false;
    }, 100);
};

onMounted(() => {
    appearance.value = true;
    setTimeout(() => {
        appearance.value = false;
    }, 1500);
});
</script>
