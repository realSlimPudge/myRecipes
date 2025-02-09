<template>
    <div class="text-2xl">
        <div
            class="bg-green-400 w-fit px-4 py-1 rounded-tl-2xl rounded-tr-2xl ml-4"
        >
            <h3 class="text-white font-bold">
                {{ name }}
            </h3>
        </div>
        <div
            class="bg-white px-4 py-4 rounded-2xl border-slate-200 ease duration-200 border-2 hover:border-green-400"
        >
            <p>{{ description }}</p>
        </div>
    </div>
</template>
<script lang="ts" setup>
interface Props {
    name: string;
    description: string;
}
defineProps<Props>();
</script>
