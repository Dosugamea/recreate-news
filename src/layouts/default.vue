<template>
  <v-app>
    <v-main class="container">
      <v-container>
        <nuxt-page />
      </v-container>
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
