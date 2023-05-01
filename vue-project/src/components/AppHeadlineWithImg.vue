<template>
  <header class="w-full md:p-8 md:bg-white">
    <AppHeadline headline="App Link Shortner" />
    <AppIcon iconUrl="/src/assets/share-link.svg" iconAlt="Link shortner icon"/>
  </header>
</template>
<script>
export default {
  name: 'AppHeadlineWithImg',
  props: {
    headline: {
      type: String,
      required: true
    }
  }
}
</script>
