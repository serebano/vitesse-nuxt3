<script setup>
const { data: pageVisits } = await useFetch(() => '/api/kv-demo')
function refreshPage() {
  window.location.reload()
}
const enabled = ref(false)
</script>

<template>
  <main
    class="relative min-h-screen flex flex-col items-center justify-center py-10"
  >
  <h1
      class="from-black via-[#707070] to-[#ffffff] bg-gradient-to-br bg-clip-text pb-8 pt-4 text-center text-4xl font-medium tracking-tight text-transparent dark:from-white md:text-7xl"
    >
    Vercel KV Test
    </h1>
    <a
      href="https://vercel.com"
      class="rounded-full bg-white/30 px-6 py-2 text-sm font-medium text-gray-600 shadow-sm ring-1 ring-gray-900/5 transition-all dark:bg-white/80 dark:text-black active:shadow-sm hover:shadow-lg"
    >
      Deploy your own to Vercel
    </a>

    <div
      class="mx-auto mt-8 max-w-xl w-full flex flex-col items-center rounded-lg bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 backdrop-blur-lg dark:bg-white/10"
    >
      <div class="mb-6 text-center text-lg">
        Displayed below is the total number of page views for this demo. Refresh
        the page and watch it increase!
        <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" alt="Avatar" />
      </div>
      <button
        class="mb-6 font-bold underline opacity-70 hover:opacity-100"
        @click="refreshPage()"
      >
        Refresh Page
      </button>
      <div class="text-5xl font-bold">
        {{ pageVisits?.pageVisits }}
      </div>
    </div>
    <div
      class="mt-6 max-w-lg w-full text-center font-light text-gray-600 dark:text-gray-300"
    >
      Simple hello world demo of
      <a
        href="https://vercel.com/kv"
        class="font-medium underline underline-offset-4 transition-colors hover:text-black dark:hover:text-white"
      >
        Vercel KV
      </a>
      <div class="my-2 flex items-center justify-center">
        <span>Built with</span>
        <a
          href="https://nuxt.com/docs"
          class="flex items-center font-medium underline underline-offset-4 transition-colors hover:text-black dark:hover:text-white"
        >
          <img src="/nuxt.svg" class="mx-2 h-6">
          <p>Nuxt</p>
        </a>
        .
      </div>
    </div>
    <div class="flex grow flex-col">
      <a href="https://vercel.com">
        <img
          src="/vercel.svg"
          alt="Vercel Logo"
          class="my-2 text-white dark:text-white"
        >
      </a>
      <a
        href="https://github.com/vercel/examples/tree/main/storage/kv-redis-nuxt"
        class="bottom-20 right-20 mt-auto h-8 flex items-center space-x-2"
      >
        <img src="/github.svg" alt="GitHub Logo" class="h-6 dark:invert">
        <p class="font-light">Source</p>
      </a>
    </div>
  </main>
</template>
