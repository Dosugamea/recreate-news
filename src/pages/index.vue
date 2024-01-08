<script setup lang="ts">
useServerHead({
  titleTemplate: ''
})
</script>

<template>
  <v-container>
    <v-row>
      <v-col v-for="i in 12" :key="i" cols="12" class="ma-n1">
        <news-post />
      </v-col>
      <v-col class="ma-n1">
        <news-more />
      </v-col>
    </v-row>
  </v-container>
</template>
