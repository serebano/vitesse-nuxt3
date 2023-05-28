<script setup lang="ts">
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
  icon: 'i-heroicons-arrow-down-circle-20-solid',
  to: '/'
},{
  label: 'KV Vercel',
  icon: 'i-heroicons-beaker',
  to: '/kv'
},
{
  label: 'Feedback',  
  icon: 'i-heroicons-envelope',
  to: '/feedback'
},
{
  label: 'About',
  icon: 'i-heroicons-information-circle',
  to: '/about'
}]
</script>

<template>
  <UVerticalNavigation 
    :links="links"
    :ui="{
      wrapper: '-ml-4',
      padding: 'py-2  pr-4 pl-4',
      size: 'text-base'
    }"
   />
</template>
