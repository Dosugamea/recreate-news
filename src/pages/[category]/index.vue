<script setup lang="ts">
const { params } = useRoute()

const validCategories = ['information', 'maintenance', 'update']

const endpoint = (() => {
  const categoryLike = params.category
  if (typeof categoryLike === 'string') {
    if (!validCategories.includes(categoryLike)) {
      return null
    }
    return categoryLike
  }
  if (!validCategories.includes(categoryLike[0])) {
    return null
  }
  return categoryLike[0]
})()

useServerHead({
  title: endpoint
})
</script>

<template>
  <news-list :endpoint="endpoint" />
</template>
