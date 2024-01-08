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

const slug = (() => {
  const slugLike = params.slug
  if (typeof slugLike === 'string') {
    return slugLike
  }
  if (Array.isArray(slugLike)) {
    return slugLike.join('/')
  }
  return null
})()
</script>

<template>
  <news-detail :endpoint="endpoint" :slug="slug" />
</template>
