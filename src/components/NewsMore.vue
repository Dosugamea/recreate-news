<script setup lang="ts">
interface Emits {
  (event: 'click'): void
}
const emits = defineEmits<Emits>()
</script>

<template>
  <v-btn
    class="border-strong w-100 ma-1 bg-news-base text-primary"
    size="large"
    elevation="0"
    @click="emits('click')"
  >
    <div class="mx-1 my-2">
      <span class="font-weight-bold">▼もっと表示▼</span>
    </div>
  </v-btn>
</template>

<style scoped lang="scss">
.border-strong {
  outline: 3px solid rgb(var(--v-theme-news-wrap));
  outline-offset: -3px;
}
</style>
