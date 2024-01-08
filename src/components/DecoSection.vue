<script setup lang="ts">
interface Props {
  text?: string
}
const props = withDefaults(defineProps<Props>(), {
  text: '注意事項'
})
</script>

<template>
  <div>
    <div class="d-flex align-center">
      <v-img
        :contain="false"
        class="flex-grow-0"
        src="/deco-hitode.png"
        width="24"
        height="24"
      />
      <span class="ml-1 flex-grow-1 text-info" v-text="props.text" />
    </div>
    <v-divider
      class="my-1 border-opacity-100 gradient-divider"
      color="info"
      :thickness="3"
    />
  </div>
</template>

<style scoped lang="scss">
.gradient-divider {
  background-image: linear-gradient(90deg, transparent 0% 0%, #fff 70% 100%);
}
</style>
