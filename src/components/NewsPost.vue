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
    class="news-post"
    variant="flat"
    size="large"
    :to="props.link ? link : undefined"
  >
    <span
      v-if="!props.new"
      class="font-weight-bold"
      v-text="props.date + props.title"
    />
    <v-badge
      v-else
      offset-y="-15"
      location="top start"
      content="NEW!!"
      color="warning"
    >
      <span class="font-weight-bold" v-text="props.date + props.title" />
    </v-badge>
  </v-btn>
</template>

<style scoped>
.pointer-events-none {
  pointer-events: none;
}

.news-post {
  height: 80px !important;
  background-image: url(/news-header.png);
  background-size: auto 80px;
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
  object-fit: cover;
}
</style>
