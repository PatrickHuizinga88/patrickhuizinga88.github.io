<template>
  <div class="form-field">
    <label
        :for="props.id"
        class="inline-block font-medium text-sm mb-1">
      {{ label }}
    </label>

    <slot/>

    <span v-if="error" class="text-sm text-red-500 mt-1">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  id: {
    type: String,
    required: true
  },
  label: String,
  required: Boolean,
  error: String
})

provide(
    "field",
    computed(() => {
      return {
        ...props,
        invalid: !!props.error
      }
    })
)
</script>

<style scoped>

</style>