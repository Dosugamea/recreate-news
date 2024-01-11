<script setup lang="ts">
import type { ListPageContent } from '@/types'

interface Props {
  endpoint: string
}
const props = defineProps<Props>()

const { locale: localeRaw } = useI18n()

const { fetchAllContents, getPageContents } = useContentSearch()
const allContents = await fetchAllContents(
  `/${localeRaw.value}/${props.endpoint}`
)
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
    <v-col v-for="content in contents" :key="content._path!" cols="12">
      <news-list-post
        class="my-n1"
        :title="content.title"
        :date="content.date"
        :link="content._path"
      />
    </v-col>
    <v-col v-if="hasNext" cols="12">
      <news-list-more @click="onClickMore" />
    </v-col>
  </v-row>
</template>
