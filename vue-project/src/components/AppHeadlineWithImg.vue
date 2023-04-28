<template>
  <header>
    <AppHeadline headline="App Link Shortner" />
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
