
<template>
    <ul class="grid grid-cols-8">

        <li class="group relative col-span-4 lg:col-span-2 aspect-square overflow-hidden hover:scale-95 hover:rounded-3xl duration-500">
            <a href="https://patrickhuizinga.nl/weather-app" target="_blank">
                <div class="flex justify-center items-center h-full w-full font-semibold text-3xl sm:text-5xl text-white leading-tight bg-gradient-to-br from-[#55AEFF] to-[#6543FF]">
                    Weather <br />
                    App
                </div>
            </a>
            <img src="../assets/images/projects/weather-app/thunder.webp" alt="" class="absolute h-32 md:h-48 -top-10 right-full group-hover:translate-x-24 sm:group-hover:translate-x-32 duration-500">
            <img src="../assets/images/projects/weather-app/partially-cloudy.webp" alt="" class="absolute h-24 sm:h-32 bottom-2 sm:bottom-4 left-full group-hover:-translate-x-16 sm:group-hover:-translate-x-28 duration-500">
        </li>

        <li class="col-span-4 lg:col-span-2 relative aspect-square overflow-hidden hover:scale-95 hover:rounded-3xl duration-500">
            <a href="https://jumpgestel.nl" target="_blank">
                <div class="group relative flex justify-center items-center h-full w-full bg-black bg-repeat p-8 de-jump-background">
                    <div class="opacity-0 group-hover:opacity-100 absolute top-0 right-0 inset-0 bg-gradient-to-bl from-primary-500 to-transparent mix-blend-color duration-500"></div>
                    <img src="../assets/images/projects/de-jump/logo.svg" alt="De Jump" class="w-56 z-0">
                </div>
            </a>
        </li>

        <li class="group relative col-span-4 lg:col-span-2 aspect-square overflow-hidden hover:scale-95 hover:rounded-3xl duration-500">
            <a href="https://patrickhuizinga.nl/trello-clone" target="_blank">
                <div class="flex flex-col justify-center items-center h-full w-full font-semibold text-2xl sm:text-5xl leading-tight bg-teal-600">
                    <div class="flex items-center">
                        <div class="relative h-6 w-6 sm:h-[37px] sm:w-[37px] mr-2 sm:mr-3.5">
                            <img src="../assets/images/projects/trello-clone/icon.svg" alt="" class="absolute mr-3 duration-300 opacity-50">
                            <img src="../assets/images/projects/trello-clone/icon.svg" alt="" class="absolute group-hover:-rotate-[18deg] mr-3 duration-300">
                        </div>

                        <img src="../assets/images/projects/trello-clone/text.svg" alt="" class="h-6 sm:h-auto">
                    </div>
                    <span class="text-xl sm:text-2xl font-normal mt-2 -ml-3">clone</span>
                </div>
            </a>
        </li>

        <li class="group relative col-span-4 lg:col-span-2 aspect-square overflow-hidden bg-gradient-to-bl from-[#6EDAFF] to-[#C286FF] gif-finder-background bg-cover hover:scale-95 hover:rounded-3xl duration-500">
            <a href="https://patrickhuizinga.nl/gif-finder" target="_blank">
                <div class="flex justify-center items-center h-full w-full font-handwriting font-semibold text-3xl sm:text-5xl text-white leading-tight">
                    GIF Finder
                </div>
            </a>
        </li>

    </ul>
</template>

<script setup>

</script>

<style scoped>
.de-jump-background {
    background-image: url('../assets/images/projects/de-jump/pattern.png');
}

.gif-finder-background:hover {
    background-image: url('../assets/images/projects/gif-finder/background.gif');
}
</style>