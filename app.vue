<script setup lang="ts">
import { appName } from '~/constants'

useHead({
  title: appName,
  htmlAttrs: {
    lang: 'en',
  },
  bodyAttrs: {
    class: 'antialiased font-sans text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900',
  },
})
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
