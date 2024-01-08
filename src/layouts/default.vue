<template>
  <v-app>
    <v-main class="container">
      <nuxt-page />
    </v-main>
    <client-only>
      <back-to-top />
    </client-only>
  </v-app>
</template>

<style scoped>
.container {
  min-height: 100vh;
}
</style>
