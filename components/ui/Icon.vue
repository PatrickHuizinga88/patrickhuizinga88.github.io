<template>
  <component :is="icons[name]"/>
</template>

<script setup lang="ts">
import * as icons from 'lucide-vue-next'

const props = defineProps({
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

<style scoped>
svg {
  display: inline-block;

}
</style>