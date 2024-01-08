<script setup lang="ts">
useServerHead({
  titleTemplate: 'detail'
})
</script>

<template>
  <v-row>
    <v-col cols="12">
      <deco-chip type="news" class="mb-1" />
      <deco-chip type="update" class="mb-1" />
      <deco-chip type="maintenance" class="mb-1" />
      <news-post />
    </v-col>
    <v-col cols="12">
      <p>『』をご利用いただき、誠にありがとうございます。</p>
      <br />
      <p>アップデートにおいて実装予定の機能改善内容をご案内いたします。</p>
      <br />
    </v-col>
    <v-col cols="12">
      <v-img
        :aspect-ratio="3 / 1"
        src="https://placehold.jp/720x480.png?text=thumbnail"
      />
    </v-col>
    <v-col cols="12">
      <deco-section text="開催期間" />
      <p>1月8日 17:00 ～ 2月4日 16:59</p>
    </v-col>
  </v-row>
</template>
