<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  },
  width: {
    type: [String, Number],
    default: undefined
  },
  height: {
    type: [String, Number],
    default: undefined
  }
})
</script>

<template>
  <v-img
    :src="props.src"
    :alt="alt"
    max-height="256"
    :width="width"
    :height="height"
  />
</template>
