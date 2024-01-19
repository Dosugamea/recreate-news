<script setup lang="ts">
interface Props {
  src: string
  alt: string
  width?: string | number
  height?: string | number
}

const props = defineProps<Props>()

const imageSrc = useImageLink(props.src)
</script>

<template>
  <v-img
    :src="imageSrc"
    :alt="props.alt"
    max-height="256"
    :width="props.width"
    :height="props.height"
  />
</template>
