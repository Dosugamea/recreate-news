<script setup lang="ts">
interface Props {
  date?: `${string}/${string}`
  title?: string
  link?: string
  new?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  date: undefined,
  title: '【重要】サービス終了のご案内',
  link: '',
  new: false
})
</script>

<template>
  <v-card
    class="w-100 border-strong ma-1 bg-news-base text-primary"
    size="large"
    elevation="0"
    :to="props.link ? link : undefined"
  >
    <div class="mx-1 my-2">
      <div
        class="news-header-text d-flex align-center justify-center text-pre-wrap font-weight-bold"
      >
        <v-badge
          v-if="props.new"
          class="d-flex"
          content="NEW!!"
          color="warning"
          inline
        />
        <span
          v-if="props.date"
          class="flex-shrink-0 mx-2"
          v-text="props.date"
        />
        <span class="flex-shrink-1 mx-1 text-left" v-text="props.title" />
      </div>
    </div>
  </v-card>
</template>

<style scoped lang="scss">
.border-strong {
  outline: 3px solid rgb(var(--v-theme-news-wrap));
  outline-offset: -3px;
}

.news-header-text {
  font-size: clamp(8px, 3vw, 24px);
}
</style>
