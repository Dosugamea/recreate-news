<script setup lang="ts">
import { mdiChevronUp } from '@mdi/js'
import { ref } from 'vue'

const shouldShow = ref<boolean>(false)

const onScroll = () => {
  shouldShow.value = window.scrollY > 200
}
const onClick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
  <v-layout-item
    v-scroll="onScroll"
    class="text-end pointer-events-none"
    model-value
    position="bottom"
    size="88"
  >
    <div class="ma-4">
      <v-fab-transition>
        <v-btn
          v-show="shouldShow"
          class="mt-auto pointer-events-initial pa-2"
          color="primary"
          elevation="4"
          :icon="mdiChevronUp"
          size="large"
          @click="onClick"
        />
      </v-fab-transition>
    </div>
  </v-layout-item>
</template>

<style scoped>
.pointer-events-none {
  pointer-events: none;
}

.pointer-events-initial {
  pointer-events: initial;
}
</style>
