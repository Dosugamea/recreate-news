<script setup lang="ts">
import { mdiStar } from '@mdi/js'

interface Props {
  href: string
}
const props = defineProps<Props>()
</script>

<template>
  <div class="d-flex justify-center align-center">
    <v-btn
      :prepend-icon="mdiStar"
      :append-icon="mdiStar"
      :href="props.href"
      size="x-large"
      elevation="6"
      rounded="xl"
      class="my-8 text-center text-white bg-orange"
    >
      <slot />
    </v-btn>
  </div>
</template>
