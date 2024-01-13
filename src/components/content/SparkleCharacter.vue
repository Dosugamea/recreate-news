<script setup lang="ts">
import {
  mdiStarCircle,
  mdiStar,
  mdiCircleSlice1,
  mdiCircleSlice2,
  mdiCircleSlice3,
  mdiCircleSlice4,
  mdiCircleSlice5
} from '@mdi/js'
import { useDisplay } from 'vuetify/lib/framework.mjs'

interface SkillInfo {
  iconImage?: string
  title: string
  description: string
}

interface StatusInfo {
  hp: number
  atk: number
  mat: number
  def: number
  mdf: number
  spd: number
}

interface Props {
  descriptionImage?: string
  rarity: 4 | 5
  element: 'fire' | 'water' | 'wind' | 'earth' | 'light' | 'dark'
  job: 'warrior' | 'wizard' | 'priest' | 'knight' | 'alchemist'
  cardImage?: string
  name: string
  status: StatusInfo
  skill1: SkillInfo
  skill2: SkillInfo
  skill3: SkillInfo
}
const props = withDefaults(defineProps<Props>(), {
  cardImage: 'https://placehold.jp/128x200.png?text=NowPrinting',
  descriptionImage: undefined
})

const charaStatus = computed(() => {
  return [
    { key: 'HP', value: props.status.hp },
    { key: 'ATK', value: props.status.atk },
    { key: 'MAT', value: props.status.mat },
    { key: 'DEF', value: props.status.def },
    { key: 'MDF', value: props.status.mdf },
    { key: 'SPD', value: props.status.spd }
  ]
})
const elementColor = computed(() => {
  switch (props.element) {
    case 'fire':
      return 'red'
    case 'water':
      return 'blue'
    case 'wind':
      return 'green'
    case 'earth':
      return 'brown'
    case 'light':
      return 'yellow'
    case 'dark':
      return 'purple'
  }
})
const jobIcon = computed(() => {
  switch (props.job) {
    case 'warrior':
      return mdiCircleSlice1
    case 'wizard':
      return mdiCircleSlice2
    case 'priest':
      return mdiCircleSlice3
    case 'knight':
      return mdiCircleSlice4
    case 'alchemist':
      return mdiCircleSlice5
  }
})
const jobName = computed(() => {
  switch (props.job) {
    case 'warrior':
      return '【せんし】'
    case 'wizard':
      return '【まほうつかい】'
    case 'priest':
      return '【そうりょ】'
    case 'knight':
      return '【ナイト】'
    case 'alchemist':
      return '【アルケミスト】'
  }
})
const skillInfos = computed(() => {
  return [props.skill1, props.skill2, props.skill3].map((skill) => {
    return {
      iconImage:
        skill.iconImage || 'https://placehold.jp/50x50.png?text=NowPrinting',
      title: '■ ' + skill.title,
      description: skill.description
    }
  })
})

const { mobile } = useDisplay()

const miniIconSize = computed(() => {
  if (mobile.value) return 'x-small'
  return 'small'
})

const bigIconSize = computed(() => {
  if (mobile.value) return 'medium'
  return 'x-large'
})
</script>

<template>
  <v-card class="pa-4" flat>
    <v-img
      v-if="props.descriptionImage"
      :src="props.descriptionImage"
      max-height="128px"
      class="mb-4"
      contain
    />
    <div class="d-flex align-center justify-end">
      <v-icon
        v-for="i in props.rarity"
        :key="i"
        outlined
        color="orange"
        :size="bigIconSize"
        :icon="mdiStar"
      />
      <v-icon :color="elementColor" :size="bigIconSize" :icon="mdiStarCircle" />
      <v-icon color="pink" :icon="jobIcon" :size="bigIconSize" />
      <span class="responsive-text" v-text="jobName" />
    </div>
    <v-row class="my-1">
      <v-col cols="5">
        <v-img :src="props.cardImage" elevation="3" />
      </v-col>
      <v-col cols="7">
        <p class="name-text font-weight-medium" v-text="props.name" />
        <v-divider class="my-1" />
        <v-row no-gutters>
          <v-col v-for="kv in charaStatus" :key="kv.key" cols="4">
            <div class="d-flex align-center ma-1">
              <v-chip
                :size="miniIconSize"
                class="justify-center w-50 font-weight-bold responsive-text"
                :text="kv.key"
              />
              <span class="responsive-text" v-text="kv.value" />
            </div>
          </v-col>
        </v-row>
        <p class="mt-4 text-center align-center">
          <v-icon :size="miniIconSize" color="pink" :icon="mdiStar" />
          <v-icon :size="miniIconSize" color="orange" :icon="mdiStar" />
          <v-icon :size="miniIconSize" color="cyan" :icon="mdiStar" />
          <span class="font-weight-bold responsive-text">とっておき</span>
          <v-icon :size="miniIconSize" color="cyan" :icon="mdiStar" />
          <v-icon :size="miniIconSize" color="orange" :icon="mdiStar" />
          <v-icon :size="miniIconSize" color="pink" :icon="mdiStar" />
        </p>
        <v-row class="my-2" no-gutters>
          <v-col v-if="!mobile" cols="3">
            <v-img max-height="50px" :src="skillInfos[0].iconImage" />
          </v-col>
          <v-col :cols="!mobile ? 9 : 12">
            <p class="responsive-text" v-text="skillInfos[0].title" />
            <p class="responsive-text" v-text="skillInfos[0].description" />
          </v-col>
        </v-row>
        <v-divider />
        <v-row
          v-for="skillInfo in skillInfos.slice(1)"
          :key="skillInfo.title"
          class="my-2"
          no-gutters
        >
          <v-col v-if="!mobile" cols="3">
            <v-img max-height="50px" :src="skillInfo.iconImage" />
          </v-col>
          <v-col :cols="!mobile ? 9 : 12">
            <p class="responsive-text" v-text="skillInfo.title" />
            <p class="responsive-text" v-text="skillInfo.description" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <slot />
  </v-card>
</template>

<style scoped lang="scss">
.name-text {
  font-size: clamp(20px, 2vw, 32px);
}

.responsive-text {
  font-size: clamp(11px, 1vw, 16px);
}
</style>
