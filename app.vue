<template>
  <NavBar/>
  <main class="mb-12">
    <section id="intro" class="relative grid grid-cols-8 h-screen gap-y-20 sm:gap-y-32">
      <img src="./assets/images/background.webp" alt="" class="absolute h-full w-full object-cover -z-30">
      <div class="col-span-6 md:col-span-4 col-start-2 md:col-start-3 z-10 mt-auto">
        <transition
          enter-active-class="transition ease-out duration-700"
          enter-from-class="opacity-0 translate-y-4"
          enter-to-class="opacity-100 translate-y-0"
          appear
        >
          <img
            v-if="mounted"
            src="./assets/images/patrick-huizinga.svg"
            alt="Patrick Huizinga"
            class="w-full">
        </transition>
      </div>

      <transition
        enter-active-class="transition ease-out duration-700 delay-100"
        enter-from-class="opacity-0 translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        appear
      >
        <div v-if="mounted" class="relative col-span-6 sm:col-span-4 col-start-2 sm:col-start-3 grid grid-cols-4 font-handwriting text-2xl sm:text-3xl mb-auto gap-y-16 sm:gap-y-24">
          <div class="col-span-full sm:col-span-2 text-center px-8">
            a glimpse of my journey
          </div>

          <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl sm:text-4xl font-bold">&</span>

          <div class="col-span-full sm:col-span-2 text-center px-8">
            a showcase of creations
          </div>
        </div>
      </transition>

      <div class="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-zinc-950 to-transparent -z-20"></div>
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
          <img src="./assets/images/me.webp" alt="Patrick Huizinga" class="aspect-square sm:aspect-auto object-cover object-top rounded-[1.25rem]">
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
        <div class="relative col-span-full sm:col-span-6 xl:col-span-4 sm:col-start-2 xl:col-start-3 sm:rounded-3xl bg-zinc-900/75">
          <div class="bg-gradient-to-br from-primary-500/15 to-accent/15 sm:rounded-3xl px-6 py-8 sm:p-10">
            <div class="flex gap-6 sm:gap-8 items-end mb-12 z-10">
              <img src="./assets/images/memoji-smile-cropped.webp" alt="" class="h-28 sm:h-32 -mt-12 sm:-mt-20">
              <h1 class="text-5xl sm:text-6xl font-handwriting">Let's talk!</h1>
            </div>
            
            <form v-if="!formSuccess" @submit.prevent="sendEmail" class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
              
              <UiFormField
                label="Your name"
                id="name"
                required
                >
                <UiFormInput v-model="form.name" type="text" />
              </UiFormField>

              <UiFormField
                label="Email"
                id="email"
                
                >
                <UiFormInput v-model="form.email" type="email" />
              </UiFormField>

              <UiFormField
                label="Message"
                id="message"
                class="sm:col-span-2"
                required
                >
                <UiFormTextarea v-model="form.message" rows="6"/>
              </UiFormField>

              <button 
                type="submit" 
                :disabled="formPending"
                class="flex justify-center items-center sm:col-span-2 rounded-md bg-primary-300 px-3 py-2 font-semibold text-zinc-900 hover:bg-primary-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary duration-300">
                Send <UiIcon v-if="formPending" name="Loader2" class="h-5 w-5 ml-2 animate-spin"/>
              </button>
            
            </form>

            <p v-else class="mt-4">Thank you! Your message has been sent.</p>

            <p v-if="formError" class="text-red-500 mt-4">{{ formError }}</p>

          </div>
        </div>
        
      </div>
    </section>
  </main>

  <footer class="grid grid-cols-8 bg-black pt-24 pb-40">
    <div class="col-span-6 col-start-2">
      <div class="flex justify-center items-center gap-x-6">
        <a href="https://www.linkedin.com/in/patrick-huizinga-3957b914b/" target="_blank" class="p-3 rounded-full hover:bg-zinc-800 duration-300">
          <UiIcon name="Linkedin" class="h-7 w-7 text-white" />
        </a>
        <a href="https://github.com/PatrickHuizinga88" target="_blank" class="p-3 rounded-full hover:bg-zinc-800 duration-300">
          <UiIcon name="Github" class="h-7 w-7 text-white" />
        </a>
      </div>
    </div>
  </footer>

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
const mounted = ref(false)
const form = reactive({
  name: '',
  email: '',
  message: ''
})
const formSuccess = ref(false)
const formError = ref('')
const formPending = ref(false)

onMounted(() => {
  mounted.value = true
})

const sendEmail = async () => {
  formPending.value = true
  const { error } = await useFetch('/api/send', {
    method: 'POST',
    body: {
      name: form.name,
      email: form.email,
      message: form.message
    }
  })

  if (error.value) {
    formError.value = 'Ouch... Something went wrong, please try again later.'
    return
  }

  formSuccess.value = true
  formError.value = ''
  formPending.value = false
}
</script>

<style scoped>

</style>