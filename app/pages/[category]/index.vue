<script setup lang="ts">
const { params } = useRoute()

const validCategories = ['information', 'maintenance', 'update']

const endpoint = (() => {
  const categoryLike = params.category
  const category = Array.isArray(categoryLike) ? categoryLike[0] : categoryLike
  if (!category || !validCategories.includes(category)) {
    return null
  }
  return category
})()

useHead({
  title: endpoint ?? ''
})
</script>

<template>
  <news-list v-if="endpoint" :endpoint="endpoint" />
</template>
