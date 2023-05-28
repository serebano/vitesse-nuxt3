<script setup lang="ts">
const isDialogOpen = useDrawer()

const click = () => {
  isDialogOpen.value = false
}
const links = [
//   {
//   label: 'Profile',
//   avatar: {
//     src: 'https://avatars.githubusercontent.com/u/739984?v=4'
//   },
//   badge: 100
// }, 

{
  label: 'Download',
  icon: 'i-heroicons-arrow-down-circle',
  to: '/',
  click
},{
  label: 'KV Vercel',
  icon: 'i-heroicons-beaker',
  to: '/kv',
  click
},
{
  label: 'Feedback',  
  icon: 'i-heroicons-envelope',
  to: '/feedback',
  click
},
{
  label: 'About',
  icon: 'i-heroicons-information-circle',
  to: '/about',
  click
}]
</script>

<template>
  <UVerticalNavigation 
    :links="links"
    :ui="{
      wrapper: '-ml-3',
      padding: 'py-2.5  pr-4 pl-3',
      size: 'text-md'
    }"
   />
</template>
