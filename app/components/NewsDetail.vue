<script setup lang="ts">
const route = useRoute()

const { data: doc } = await useAsyncData(`content-${route.path}`, () =>
  queryCollection('content').path(route.path).first()
)
</script>

<template>
  <v-row v-if="doc" justify="center">
    <v-col cols="12" sm="12" md="10" lg="8" xl="6">
      <news-detail-chip class="mb-1" :type="doc.type" />
      <news-list-post
        class="mb-5"
        :date="doc.date"
        :title="doc.title"
        :new="doc.new"
      />
      <ContentRenderer :value="doc" />
    </v-col>
  </v-row>
</template>
