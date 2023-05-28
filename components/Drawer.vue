<script setup lang="ts">
const isOpen = useDrawer()
</script>

<template>
  <div>
    <!-- <UButton :padded="false" size="xl" variant="ghost" square icon="i-heroicons-bars-3" @click="isOpen = true" /> -->

    <USlideover side="left" v-model="isOpen">
      <!-- Content -->
    </USlideover>
  </div>
</template>
