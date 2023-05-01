<template>
  <h1 class="mb-6 md:mb-12 text-2xl xl:text-3xl font-bold text-center text-green-500">{{ headline }}</h1>
</template>
<script>
export default {
  name: 'AppHeadline',
  props: {
    headline: {
      type: String,
      required: true
    }
  }
}
</script>
