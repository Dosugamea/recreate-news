<script setup lang="ts">
import { mdiArrowTopRightThick, mdiCommentAlert, mdiTools } from '@mdi/js'

interface Props {
  type: 'information' | 'update' | 'maintenance'
}
const props = withDefaults(defineProps<Props>(), {
  type: 'information'
})

const { t } = useI18n()

const icon = computed(() => {
  switch (props.type) {
    case 'information':
      return mdiCommentAlert
    case 'update':
      return mdiArrowTopRightThick
    case 'maintenance':
      return mdiTools
    default:
      throw new Error(props.type satisfies never)
  }
})

const bgClass = computed(() => {
  switch (props.type) {
    case 'information':
      return 'bg-pink'
    case 'update':
      return 'bg-orange'
    case 'maintenance':
      return 'bg-green'
    default:
      throw new Error(props.type satisfies never)
  }
})

const hintText = computed(() => {
  switch (props.type) {
    case 'information':
      return t('information')
    case 'update':
      return t('update')
    case 'maintenance':
      return t('maintenance')
    default:
      throw new Error(props.type satisfies never)
  }
})
</script>

<template>
  <v-chip class="px-3" :class="bgClass" size="medium" pill variant="flat">
    <v-icon color="white" size="small" class="mr-1" :icon="icon" />
    <span class="text-white" v-text="hintText" />
  </v-chip>
</template>
