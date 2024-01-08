<script setup lang="ts">
useServerHead({
  titleTemplate: ''
})
</script>

<template>
  <v-row>
    <v-col cols="12">
      <news-list-post class="my-n1" title="information" link="/information" />
    </v-col>
    <v-col cols="12">
      <news-list-post class="my-n1" title="maintenance" link="/maintenance" />
    </v-col>
    <v-col cols="12">
      <news-list-post class="my-n1" title="update" link="/update" />
    </v-col>
  </v-row>
</template>
