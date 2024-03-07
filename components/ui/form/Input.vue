<template>
  <input
      :id="field.id"
      :value="props.modelValue"
      @input="emit( 'update:modelValue', $event.target.value)"
      :required="field.required"
      :class="[invalid ? 'ring-red-500' : 'ring-zinc-700', 'block w-full rounded-md bg-zinc-900 border-0 py-2 px-3 ring-1 ring-inset placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-300']"
      v-bind="$attrs"
  >
</template>

<script setup lang="ts">
const props = defineProps({
  invalid: Boolean,
  modelValue: [String, Number]
})

const field = inject("field", props)

const emit = defineEmits(['update:modelValue'])
</script>

<style scoped>

</style>