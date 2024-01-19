<script setup lang="ts">
const { params } = useRoute()

const slug = (() => {
  const slugLike = params.slug
  if (typeof slugLike === 'string') {
    return slugLike
  }
  if (Array.isArray(slugLike)) {
    return slugLike.join('/').slice(0, -1)
  }
  return null
})()
</script>

<template>
  <news-detail :slug="slug" />
</template>
