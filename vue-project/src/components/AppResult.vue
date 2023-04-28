<template>
  <section>
    <p>{{ textAboveResult }}</p>
    <p>{{ inputResult }}</p>
  </section>
</template>
<script>
export default {
  name: 'AppResult',
  props: {
    inputResult: {
      type: String,
      required: false
    },
    textAboveResult: {
      type: String,
      required: true
    }
  },
}
</script>
