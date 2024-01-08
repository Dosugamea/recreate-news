<script setup lang="ts">
const { params } = useRoute()

const slug = params.slug as string
console.log(slug)

const { data } = await useAsyncData('article', () =>
  queryContent(`/en/information/${slug}`).findOne()
)
console.log(data)
</script>

<template>
  <ContentRenderer v-if="data" :value="data" />
  <p v-else>Not found</p>
</template>
