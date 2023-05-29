<template>
  <header
    class="sticky top-0 z-[1]  w-full backdrop-blur flex-none border-b border-gray-900/10 dark:border-gray-50/[0.06] bg-white/75 dark:bg-gray-900/75">
    <UContainer>
      <div class="flex items-center justify-between min-h-12">

        <UButton square color="gray" class="lg:hidden mt-2 mb-2 mr-4" size="xl" variant="ghost" icon="i-heroicons-bars-3-20-solid"
          @click="isDialogOpen = true" />

        <HeaderLogo />

        <div class="flex items-center">
          <ClientOnly>
            <UButton 
            :icon="isDark ? 'i-heroicons-moon' : 'i-heroicons-sun'" 
            class="mt-2 mb-2 ml-4"
            color="gray" 
            variant="ghost"
              aria-label="Theme" @click="isDark = !isDark" size="xl" square />

            <template #fallback>
              <div class="w-8 h-8" />
            </template>
          </ClientOnly>
        </div>
      </div>
    </UContainer>

    <USlideover side="left" v-model="isDialogOpen">
      <!-- Content -->
      <div
              class="sticky top-0 border-b border-gray-900/10 dark:border-gray-50/[0.06] bg-white/75 dark:bg-gray-900/75 backdrop-blur z-10">
              <UContainer>
                <div class="flex items-center justify-between h-16">


                  <div class="flex -mr-1.5">
                    <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" size="xl"
                      @click="isDialogOpen = false" />
                  </div>

                  <!-- <HeaderLogo /> -->

                </div>
              </UContainer>
            </div>

            <div class="relative flex flex-col flex-1 h-[calc(100vh-4rem)] overflow-y-scroll ">
            
              <div class="flex-1">
                <UContainer>
                  <AsideNav class="p-4" />
                </UContainer>

              </div>

              <div class="px-4 pb-4 backdrop-blur-sm sticky bottom-0">
                <UContainer>
                  <ThemeSelect />
                </UContainer>
              </div>


          </div>
    </USlideover>

    <TransitionRoot :show="isDialogOpen2" as="template">
      <Dialog as="div" @close="isDialogOpen = false">

        <!-- Wrap your backdrop in a `TransitionChild`. -->
        <!-- <TransitionChild enter="duration-100" enter-from="opacity-0" enter-to="opacity-100"
          leave="duration-100 ease-in" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 z-[100] bg-gray-200/75 dark:bg-gray-800/75" />
        </TransitionChild> -->

        <div class="fixed inset-0 z-[100] bg-gray-200/75 dark:bg-gray-800/75" />

        <!-- Wrap your panel in a `TransitionChild`. -->
        <!-- <TransitionChild 
          leave="duration-100 ease-in" leave-from="opacity-100" leave-to="opacity-0"> -->

          <DialogPanel
            class="lg:hidden z-[200] fixed left-0 top-0 bottom-0 bg-white dark:bg-gray-900 border-0 border-gray-900/10 dark:border-gray-50/[0.06]">
           
            <div
              class="sticky top-0 border-b border-gray-900/10 dark:border-gray-50/[0.06] bg-white/75 dark:bg-gray-900/75 backdrop-blur z-10">
              <UContainer>
                <div class="flex items-center justify-between h-16">


                  <div class="flex -mr-1.5">
                    <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" size="xl"
                      @click="isDialogOpen = false" />
                  </div>

                  <!-- <HeaderLogo /> -->

                </div>
              </UContainer>
            </div>

            <div class="relative flex flex-col flex-1 h-[calc(100vh-4rem)] overflow-y-scroll ">
            
              <div class="flex-1">
                <UContainer>
                  <AsideNav class="p-4" />
                </UContainer>

              </div>

              <div class="px-4 pb-4 backdrop-blur-sm sticky bottom-0">
                <UContainer>
                  <ThemeSelect />
                </UContainer>
              </div>


          </div>


          </DialogPanel>
        <!-- </TransitionChild> -->

      </Dialog>
    </TransitionRoot>
  </header>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel, TransitionRoot, TransitionChild } from '@headlessui/vue'
import colors from '#tailwind-config/theme/colors'

const appConfig = useAppConfig()

const primaryCookie = useCookie('primary', { path: '/', default: () => appConfig.ui.primary })
const grayCookie = useCookie('gray', { path: '/', default: () => appConfig.ui.gray })

// const { isSearchModalOpen } = useDocs()
const isSearchModalOpen = ref(false)
const colorMode = useColorMode()
const isDialogOpen = useDrawer()
const isDialogOpen2 = ref(false)

//const isDialogOpen = ref(false)

const grayOptions = computed(() => ['slate', 'cool', 'zinc', 'neutral', 'stone'].map(color => ({ value: color, text: color, hex: colors[color][colorMode.value === 'dark' ? 900 : 500] })))
const gray = computed({
  get () {
    return grayOptions.value.find(option => option.value === appConfig.ui.gray)
  },
  set (option) {
    console.log('GRAY-SET', option)
    grayCookie.value = option.value
  }
})

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

const head = useHead({
  meta: [{
    id: 'theme-color',
    name: 'theme-color',
    content: () => {
      console.log('useHead meta theme', colorMode.value, appConfig.ui.gray, gray.value)
      return colorMode.value === 'dark' ? gray.value?.hex : '#ffffff'
    },
  }],
})

watch(grayCookie, (val) => {
  console.log('watch gray cookie', val, head)
  
  //appConfig.ui.gray = gray
}, { immediate: true })

function openDocsSearch() {
  isDialogOpen.value = false

  setTimeout(() => {
    isSearchModalOpen.value = true
  }, 100)
}
</script>
