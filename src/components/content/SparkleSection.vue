<script setup lang="ts">
interface Props {
  title: string
}
const props = defineProps<Props>()

const imageSrc = useImageLink('/deco-hitode.png')
</script>

<template>
  <div>
    <div class="mt-8 d-flex align-center">
      <v-img class="flex-grow-0" :src="imageSrc" width="24" height="24" />
      <span class="ml-1 flex-grow-1 text-info" v-text="props.title" />
    </div>
    <v-divider class="my-1 border-opacity-100" color="info" :thickness="3" />
  </div>
</template>
