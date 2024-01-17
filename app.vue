<template>
  <NavBar/>
  <main class="mb-12">
    <section id="intro" class="relative grid grid-cols-8 h-screen gap-y-20 sm:gap-y-32">
      <img src="./assets/images/background.webp" alt="" class="absolute h-full w-full object-cover -z-30">
      <div class="col-span-6 md:col-span-4 col-start-2 md:col-start-3 z-10 mt-auto">
        <transition 
          enter-active-class="transition ease-out duration-1000" 
          enter-from-class="opacity-0 translate-y-6" 
          enter-to-class="opacity-100 translate-y-0"
          appear
        >
          <img 
            v-if="isLoaded"
            src="./assets/images/patrick-huizinga.svg" 
            alt="Patrick Huizinga" 
            class="w-full">
        </transition>
      </div>

      <transition 
        enter-active-class="transition ease-out duration-1000 delay-200" 
        enter-from-class="opacity-0 translate-y-6" 
        enter-to-class="opacity-100 translate-y-0"
        appear
      >
        <div v-if="isLoaded" class="relative col-span-6 sm:col-span-4 col-start-2 sm:col-start-3 grid grid-cols-4 font-handwriting text-2xl sm:text-3xl mb-auto gap-y-16 sm:gap-y-24">
          <div class="col-span-full sm:col-span-2 text-center px-8">
            a glimpse of my journey
          </div>

          <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl sm:text-4xl font-bold">&</span>

          <div class="col-span-full sm:col-span-2 text-center px-8">
            a showcase of creations
          </div>
        </div>
      </transition>

      <div class="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-neutral-950 to-transparent -z-20"></div>
    </section>

    <section id="about-me" class="py-24 sm:py-40">
      <div class="grid grid-cols-8 items-center">
        <div class="col-span-6 sm:col-span-3 col-start-2 sm:col-start-2">
          <h1 class="font-bold text-5xl sm:text-7xl mb-6"
            v-motion
            :initial="{ y: 16, opacity: 0 }"
            :visibleOnce="{ y: 0, opacity: 1, transition: { duration: 700, ease: 'easeOut' }}"
          >
            <span 
              class="inline-block mb-8"
              v-motion
              :initial="{ rotate: 0, x: 0, y: 0 }"
              :visibleOnce="{ rotate: 12, x: 12, y: -6, transition: { repeat: 3, repeatType: 'mirror', duration: 250, delay: 1000, ease: 'easeOut' }}"
            >👋🏻</span><br />
            Hi there,
          </h1>
          <p 
            class="text-2xl sm:text-3xl leading-snug font-handwriting"
            v-motion
            :initial="{ y: 16, opacity: 0 }"
            :visibleOnce="{ y: 0, opacity: 1, transition: { duration: 700, delay: 150, ease: 'easeOut' }}"
          >
            Building creative and innovative solutions with code is my passion as a <span class="text-primary-300">front-end developer</span>.
          </p>
          <div
            class="mt-16 sm:mt-20"
            v-motion
            :initial="{ y: 16, opacity: 0 }"
            :visibleOnce="{ y: 0, opacity: 1, transition: { duration: 700, delay: 300, ease: 'easeOut' }}"
          >
            <h2 class="text-3xl sm:text-4xl font-bold">About me</h2>
            <ul class="text-lg sm:text-xl space-y-3 sm:space-y-4 mt-4">
              <li>📆 24 years old</li>
              <li>📍 Eindhoven, Netherlands</li>
            </ul>
          </div>
        </div>
        <div class="col-span-6 sm:col-span-2 col-start-2 sm:col-start-6 bg-gradient-to-br from-primary-300 to-accent p-1 rounded-3xl overflow-hidden shadow-[10px_10px_45px_-20px_#7DE3D2,-10px_-10px_45px_-20px_#8C50F3] mt-16 sm:mt-0">
          <img src="./assets/images/me.jpeg" alt="Me" class="aspect-square sm:aspect-auto object-cover object-top rounded-[1.25rem]">
        </div>
      </div>
    </section>

    <section id="my-adventure" class="relative py-24 sm:py-40">
      <div class="grid grid-cols-8">
        <div class="col-start-2 col-span-6">
          <h1 class="relative inline-block text-4xl sm:text-7xl font-bold gradient-underline">My adventure</h1>
        </div>
        <AdventureList class="col-span-7 mt-8 sm:mt-12"/>
      </div>
      <img src="./assets/images/gradient-teal.svg" alt="" class="absolute right-0 top-40 -z-20">
      <img src="./assets/images/gradient-purple.svg" alt="" class="absolute left-0 bottom-56 -z-20">
    </section>

    <section id="showcase" class="py-24 sm:py-40">
      <div class="grid grid-cols-8">
        <div class="col-start-2 col-span-6">
          <h1 class="relative inline-block text-4xl sm:text-7xl font-bold gradient-underline">Showcase</h1>
        </div>
      </div>
      <ProjectsGrid class="mt-12 sm:mt-20"/>
    </section>

    <section id="contact" class="py-24 sm:py-40">
      <div class="grid grid-cols-8">
        <div class="col-start-2 col-span-6 text-center mb-16">
          <h1 class="relative inline-block text-5xl sm:text-6xl font-handwriting">Let's talk!</h1>
        </div>

        <div class="col-span-6 col-start-2 bg-gradient-to-br from-primary-300 to-accent p-1 rounded-3xl overflow-hidden shadow-[10px_10px_45px_-20px_#7DE3D2,-10px_-10px_45px_-20px_#8C50F3]">
          <ul class="grid grid-cols-2 gap-x-2 bg-neutral-950 text-lg sm:text-xl rounded-[1.3rem] p-2">
            
            <li class="flex justify-center items-center rounded-2xl hover:bg-neutral-800 duration-300">
              <a href="mailto:patrickhuizinga44@gmail.com" class="flex justify-center items-center w-full py-12 px-8">
                <Icon name="Envelope" class="h-12 sm:h-16 w-12 sm:w-16 stroke-2" solid/>
                <div class="sr-only">E-mail</div>
              </a>
            </li>
            
            <li class="rounded-2xl hover:bg-neutral-800 duration-300">
              <a href="https://www.linkedin.com/in/patrick-huizinga-3957b914b/" target="_blank" class="flex justify-center items-center w-full py-12 px-8">
                <img src="./assets/images/linkedin.svg" alt="LinkedIn" class="h-10 sm:h-14 w-10 sm:w-14">
              </a>
            </li>
          </ul>
        </div>
        
      </div>
    </section>
  </main>

  <div class="fixed inset-0 flex justify-between h-full w-full -z-10">
    <div class="invisible"></div>
    <div class="border border-white/[0.1] border-dashed"></div>
    <div class="border border-white/[0.1] border-dashed"></div>
    <div class="border border-white/[0.1] border-dashed"></div>
    <div class="border border-white/[0.1] border-dashed"></div>
    <div class="border border-white/[0.1] border-dashed"></div>
    <div class="border border-white/[0.1] border-dashed"></div>
    <div class="border border-white/[0.1] border-dashed"></div>
    <div class="invisible"></div>
  </div>
</template>

<script setup>
const isLoaded = ref(false)

onMounted(() => {
  isLoaded.value = true
})
</script>

<style scoped>

</style>