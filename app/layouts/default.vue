<script setup lang="ts">
const head = useLocaleHead({
  dir: true,
  lang: true,
  seo: true
})
</script>

<template>
  <Html :lang="head.htmlAttrs?.lang" :dir="head.htmlAttrs?.dir">
    <Head>
      <template v-for="link in head.link" :key="link.id">
        <link
          :id="link.id"
          :rel="link.rel"
          :href="link.href"
          :hreflang="'hreflang' in link ? link.hreflang : undefined"
        />
      </template>
      <template v-for="meta in head.meta" :key="meta.id">
        <meta
          :id="meta.id"
          :property="meta.property"
          :content="
            meta.content !== undefined ? String(meta.content) : undefined
          "
        />
      </template>
    </Head>
    <body>
      <v-app>
        <v-main>
          <v-container>
            <nuxt-page />
          </v-container>
        </v-main>
        <v-footer app class="transparent">
          <the-language-switcher />
        </v-footer>
      </v-app>
    </body>
  </Html>
</template>

<style scoped>
.transparent {
  background-color: transparent !important;
}
</style>
