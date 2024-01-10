<script setup lang="ts">
// THIS IS REQUIRED FOR SSG, since ssg can't handle redirect.
defineI18nRoute(false)

useHead({
  title: 'Sparkle News',
  titleTemplate: ''
})

const { locale } = useI18n()
</script>

<template>
  <v-row>
    <v-col cols="12">
      <news-list-post
        class="my-n1"
        title="information"
        date=""
        :link="`/${locale}/information`"
      />
    </v-col>
    <v-col cols="12">
      <news-list-post
        class="my-n1"
        title="maintenance"
        date=""
        :link="`/${locale}/maintenance`"
      />
    </v-col>
    <v-col cols="12">
      <news-list-post
        class="my-n1"
        title="update"
        date=""
        :link="`/${locale}/update`"
      />
    </v-col>
  </v-row>
</template>
