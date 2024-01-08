<script setup lang="ts">
const endpoint = 'update'

const { params } = useRoute()
const slug = (() => {
  const slugLike = params.slug
  if (typeof slugLike === 'string') {
    return slugLike
  }
  return null
})()
</script>

<template>
  <news-detail :endpoint="endpoint" :slug="slug" />
</template>
