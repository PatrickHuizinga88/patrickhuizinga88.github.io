<template>
    <div class="fixed bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2 mix-blend-exclusion backdrop-blur-md bg-neutral-200 rounded-lg shadow-[0_0_16px_#000] z-50">
        <nav class="p-0.5 bg-transparent">
            <ul class="flex gap-0.5 text-neutral-950 text-sm sm:text-base font-semibold">
                <li v-for="item in navigation" class="rounded-md overflow-hidden">
                    <a :href="item.url" class="inline-block px-5 sm:px-8 py-3 uppercase hover:bg-neutral-950 hover:text-white duration-300 whitespace-nowrap">{{ item.name }}</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
const navigation = [
    { name: 'About me', url: '#about-me' },
    { name: 'Showcase', url: '#showcase' },
    { name: 'Contact', url: '#contact' },
]
</script>

<style scoped>

</style>
