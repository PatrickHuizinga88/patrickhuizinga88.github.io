<script setup lang="ts">
import {reactive, ref} from "vue";

const form = reactive({
  name: '',
  email: '',
  message: ''
})
const formSuccess = ref(false)
const formError = ref('')
const formPending = ref(false)

const sendEmail = async () => {
  formPending.value = true
  const res = await fetch('https://share-eel-56.deno.dev', {
    method: 'POST',
    body: JSON.stringify({
      name: form.name,
      email: form.email,
      message: form.message
    })
  })

  formPending.value = false

  if (!res.ok) {
    formError.value = 'Ouch... Something went wrong, please try again later or '
    return
  }

  formSuccess.value = true
  formError.value = ''
}
</script>

<template>
  <div class="grid grid-cols-8">
    <div class="relative col-span-full sm:col-span-6 xl:col-span-4 sm:col-start-2 xl:col-start-3 sm:rounded-3xl bg-zinc-900/75">
      <div class="bg-gradient-to-br from-primary-500/15 to-accent/15 sm:rounded-3xl px-6 py-8 sm:p-10">
        <div class="flex gap-6 sm:gap-8 items-end mb-12 z-10">
          <slot />
          <h1 class="text-5xl sm:text-6xl font-handwriting">Let's talk!</h1>
        </div>
        <form v-if="!formSuccess" @submit.prevent="sendEmail" class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
          <div>
            <label for="name" class="inline-block font-medium text-sm mb-1">Your name</label>
            <input
                v-model="form.name"
                id="name"
                class="ring-zinc-700 block w-full rounded-md bg-zinc-900 border-0 py-2 px-3 ring-1 ring-inset placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-300"
                required
            />
          </div>

          <div>
            <label for="email" class="inline-block font-medium text-sm mb-1">Email</label>
            <input
                v-model="form.email"
                id="email"
                type="email"
                class="ring-zinc-700 block w-full rounded-md bg-zinc-900 border-0 py-2 px-3 ring-1 ring-inset placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-300"
                required
            />
          </div>

          <div class="sm:col-span-2">
            <label for="message" class="inline-block font-medium text-sm mb-1">Message</label>
            <textarea
                v-model="form.message"
                id="message"
                rows="6"
                class="ring-zinc-700 block w-full rounded-md bg-zinc-900 border-0 py-1.5 px-3 ring-1 ring-inset placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-300 sm:leading-6 sm:text-sm"
                required
            />
          </div>

          <button
              type="submit"
              :disabled="formPending"
              class="flex justify-center items-center sm:col-span-2 rounded-md bg-primary-300 px-3 py-2 font-semibold text-zinc-900 hover:bg-primary-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 duration-300">
            Send
          </button>
        </form>

        <p v-else class="mt-4">Thank you! Your message has been sent.</p>

        <p v-if="formError" class="text-red-500 mt-4">{{ formError }} <a href="mailto:patrickhuizinga44@gmail.com" class="underline font-medium hover:text-red-400 duration-300" target="_blank">contact me directly</a>.</p>

      </div>
    </div>

  </div>
</template>

<style scoped>

</style>