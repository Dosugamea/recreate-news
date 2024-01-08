<script setup lang="ts">
import type { ListPageContent } from '@/types'

useServerHead({
  title: 'Information'
})

const { fetchAllContents, getPageContents } = useContentSearch()
const allContents = await fetchAllContents('/en/information')
const page = ref<number>(1)

const [initialContents, initialHasNext] = getPageContents(
  allContents,
  page.value
)
const contents = ref<ListPageContent[]>(initialContents)
const hasNext = ref<boolean>(initialHasNext)

const onClickMore = () => {
  page.value++
  const [newContents, newHasNext] = getPageContents(allContents, page.value)
  contents.value = [...contents.value, ...newContents]
  hasNext.value = newHasNext
}
</script>

<template>
  <v-row>
    <v-col
      v-for="content in contents"
      :key="content._path!"
      cols="12"
      class="ma-n1"
    >
      <news-post
        :title="content.title"
        :link="content._path?.replace('/en', '')"
      />
    </v-col>
    <v-col v-if="hasNext" cols="12" class="ma-n1">
      <news-more @click="onClickMore" />
    </v-col>
    <v-col cols="12">
      <language-switcher />
    </v-col>
  </v-row>
</template>
