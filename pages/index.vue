<script setup lang="ts">
const online = useOnline()
</script>

<template>
  <main
    class="relative h-[calc(100vh-4rem)] flex gap-12 flex-col items-center justify-center"
  >
  <h1
      class="from-black via-[#707070] to-[#ffffff] bg-gradient-to-br bg-clip-text pb-8 pt-4 text-center text-4xl font-medium tracking-tight text-transparent dark:from-white md:text-7xl"
    >
    TikTok Downloader App
    </h1>

    <UInput size="xl" class="w-full" placeholder="TikTok Video URL" />


    <UButton icon="i-heroicons-arrow-down-tray" size="xl" class="rounded-full px-6">Download</UButton>
    </main>
</template>
