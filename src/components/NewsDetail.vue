<template>
  <ContentDoc v-slot="{ doc }">
    <v-row justify="center">
      <v-col cols="10" xs="12" sm="12" md="10" lg="8" xl="6">
        <news-detail-chip class="mb-3" :type="doc.type" />
        <news-list-post
          class="mb-5"
          :date="doc.date"
          :title="doc.title"
          :new="doc.new"
        />
        <ContentRenderer :value="doc" />
      </v-col>
    </v-row>
  </ContentDoc>
</template>
