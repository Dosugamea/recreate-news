<script setup lang="ts">
interface Props {
  endpoint: string
  slug: string
}
const props = defineProps<Props>()

const { locale } = useI18n()
const { data } = await useAsyncData('article', async () => {
  return await queryContent(
    `/${locale}/${props.endpoint}/${props.slug}`
  ).findOne()
})
</script>

<template>
  <ContentRenderer v-if="data" :value="data" />
  <p v-else>Not found</p>
</template>
