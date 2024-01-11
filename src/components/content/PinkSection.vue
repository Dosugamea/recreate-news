<template>
  <div>
    <div class="mt-2 d-flex align-center">
      <v-img
        class="flex-grow-0"
        src="/deco-hitode.png"
        width="24"
        height="24"
      />
      <span class="ml-1 flex-grow-1 text-info">
        <slot />
      </span>
    </div>
    <v-divider class="my-1 border-opacity-100" color="info" :thickness="3" />
  </div>
</template>
