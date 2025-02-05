<template>
    <div></div>
</template>

<script lang="ts" setup>
interface Props {
    recipe: {
        id: number;
        title: string;
        ingredients: string;
        instruction: string;
        prep_time: number;
        cool_time: number;
        servings: number;
    };
}
defineProps<Props>();
</script>
