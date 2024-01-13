<script setup lang="ts">
interface Props {
  height?: number
}
const props = withDefaults(defineProps<Props>(), {
  height: 4
})

const topHeight = computed(() => {
  return `mt-${props.height}`
})
</script>

<template>
  <v-divider class="border-opacity-0" :class="[topHeight]" />
</template>
