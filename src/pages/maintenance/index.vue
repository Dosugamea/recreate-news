<script setup lang="ts">
const endpoint = 'maintenance'

useServerHead({
  title: 'Maintenance'
})
</script>

<template>
  <news-list :endpoint="endpoint" />
</template>
