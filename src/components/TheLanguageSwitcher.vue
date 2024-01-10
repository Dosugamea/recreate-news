<script setup lang="ts">
import { mdiClose, mdiTranslate } from '@mdi/js'

const { locale: localeRaw, setLocaleCookie } = useI18n()
const router = useRouter()

const locale = computed({
  get: () => localeRaw.value,
  set: (value) => {
    setLocaleCookie(value)
    const currentPath = router.currentRoute.value.path
    if (currentPath.includes(`/${localeRaw.value}/`)) {
      router.push(currentPath.replace(`/${localeRaw.value}/`, `/${value}/`))
    }
    localeRaw.value = value
  }
})
</script>

<template>
  <v-dialog width="500">
    <template #activator="{ props }">
      <v-btn
        aria-label="Language Switcher"
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
</template>
