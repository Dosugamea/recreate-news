<script setup lang="ts">
const endpoint = 'update'

useServerHead({
  title: 'Update'
})
</script>

<template>
  <news-list :endpoint="endpoint" />
</template>
