<script setup lang="ts">
interface Props {
  src: string
  alt: string
  width?: number
  height?: number
}

const props = defineProps<Props>()

const img = useImage()
const _srcset = computed(() => {
  return img.getSizes(props.src, {
    sizes: 'xs:75vw sm:85vw md:90vw lg:100vw xl:100vw',
    modifiers: {
      format: 'webp',
      quality: 70,
      height: props.height
    }
  })
})
</script>

<template>
  <v-img
    :src="
      img(props.src, {
        width: props.width,
        height: props.height,
        format: 'webp',
        quality: 70
      })
    "
    :alt="props.alt"
    :height="height"
    :srcset="_srcset.srcset"
    :sizes="_srcset.sizes"
    max-height="256"
  />
</template>
