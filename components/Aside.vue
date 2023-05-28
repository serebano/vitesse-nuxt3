<template>
  <aside class="hidden min-w-[240px] py-6 overflow-y-auto lg:block lg:self-start lg:top-16 h-[calc(100vh-64px)] lg:sticky lg:pr-8">
    <div class="relative h-full">
      <!-- <div class="sticky top-0 pointer-events-none z-[1]">
        <div class="h-8 bg-white dark:bg-gray-900" />
        <div class="bg-white dark:bg-gray-900 relative pointer-events-auto">
          <UButton
            icon="i-heroicons-magnifying-glass-20-solid"
            class="w-full"
            color="gray"
            @click="isSearchModalOpen = true"
          >
            Search

            <div class="hidden lg:flex items-center gap-0.5 ml-auto -my-1">
              <UKbd>{{ metaSymbol }}</UKbd>
              <UKbd>K</UKbd>
            </div>
          </UButton>
        </div>
        <div class="h-8 bg-gradient-to-b from-white dark:from-gray-900" />
      </div> -->

      <AsideNav />

    </div>
    <ThemeSelect class="py-2 sticky bottom-0" />

  </aside>
</template>

<script setup lang="ts">
const isSearchModalOpen = ref(false)
const { metaSymbol } = useShortcuts()
</script>
