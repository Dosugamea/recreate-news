<script setup lang="ts">
useServerHead({
  titleTemplate: ''
})
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="i in 12" :key="i" cols="12" class="my-n2">
        <news-post class="w-100 h-100" />
      </v-col>
    </v-row>
  </v-container>
</template>
