<script setup lang="ts">
import { mdiClose, mdiTranslate } from '@mdi/js'

const router = useRouter()
const { path } = useRoute()
const localeRoute = useLocaleRoute()
const { locale: localeRaw } = useI18n()

const locale = computed({
  get: () => localeRaw.value,
  set: (value) => {
    localeRaw.value = value
    const newRoute = localeRoute(path.split('/').slice(2).join('/'))
    if (!newRoute) return
    router.push(newRoute)
  }
})
</script>

<template>
  <v-layout-item class="text-end" position="bottom" size="88">
    <v-dialog width="500">
      <template #activator="{ props }">
        <v-btn
          class="mt-auto mr-4"
          color="primary"
          elevation="2"
          size="large"
          :icon="mdiTranslate"
          v-bind="props"
        />
      </template>
      <template #default="{ isActive }">
        <v-card>
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="isActive.value = false">
              <v-icon :icon="mdiClose" />
            </v-btn>
            <v-toolbar-title>{{ $t('langSelect') }}</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-radio-group v-model="locale" column>
              <v-radio label="English" value="en" />
              <v-radio label="日本語" value="ja" />
            </v-radio-group>
          </v-card-text>
        </v-card>
      </template>
    </v-dialog>
  </v-layout-item>
</template>
