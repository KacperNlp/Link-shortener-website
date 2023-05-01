<template>
  <img :src="iconUrl" :alt="iconAlt" class="hidden md:block">
</template>
<script>
export default {
  name: 'AppIcon',
  props: {
    iconUrl: {
      type: String,
      required: true
    },
    iconAlt: {
    type: String,
      required: true 
    }
  }
}
</script>
