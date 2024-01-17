<template>
    <div class="grid grid-cols-6 items-center">
        <div class="col-span-full sm:col-span-3 py-0 sm:py-28">
            <time :datetime="date" class="inline-flex font-handwriting text-lg sm:text-[1.4rem] mb-0 sm:mb-1">{{ date }}</time>
            <h2 class="text-2xl sm:text-4xl font-semibold mb-4 sm:mb-6" v-html="highlightedText"></h2>
            <p class="sm:text-xl leading-relaxed">{{ description }}</p>
        </div>
        <div v-if="image" class="col-span-full sm:col-span-2 col-start-1 sm:col-start-5 rounded-3xl overflow-hidden mt-10 sm:mt-0">
            <img :src="image.url" :alt="image.alt">
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    date: string;
    title: string;
    highlight?: string;
    description: string;
    image?: {
        url: string;
        alt: string;
    }
}>()

const highlightedText = computed(() => {
    if (!props.highlight) return props.title

    return props.title.replace(
        props.highlight, 
        `<span class="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">${props.highlight}</span>`
    )
})
</script>