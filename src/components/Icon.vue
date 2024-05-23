<template>
  <component :is="solid ? solidIcons[name + 'Icon'] : outlineIcons[name + 'Icon']"/>
</template>

<script setup lang="ts">
import * as solidIcons from '@heroicons/vue/24/solid'
import * as outlineIcons from '@heroicons/vue/24/outline'

defineProps({
  name: {
    type: String,
    required: true
  },
  solid: {
    type: Boolean,
    default: false
  }
})
</script>
