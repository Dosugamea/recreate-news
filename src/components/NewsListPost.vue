<script setup lang="ts">
interface Props {
  date?: `${string}/${string}`
  title?: string
  link?: string
  new?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  date: '01/14',
  title: '【重要】サービス終了のご案内',
  link: '',
  new: true
})
</script>

<template>
  <v-btn
    class="w-100 border-strong ma-1 bg-news-base text-primary"
    size="large"
    elevation="0"
    :to="props.link ? link : undefined"
  >
    <div class="mx-1 my-2">
      <span
        v-if="!props.new"
        class="font-weight-bold"
        v-text="props.date + props.title"
      />
      <v-badge
        v-else
        offset-x="10"
        offset-y="-10"
        location="top start"
        content="NEW!!"
        color="warning"
      >
        <div
          class="d-flex align-center justify-center text-pre-wrap font-weight-bold"
        >
          <span v-text="props.date" />
          <span class="ml-2 text-left" v-text="props.title" />
        </div>
      </v-badge>
    </div>
  </v-btn>
</template>

<style scoped lang="scss">
.border-strong {
  outline: 3px solid rgb(var(--v-theme-news-wrap));
  outline-offset: -3px;
}
</style>
