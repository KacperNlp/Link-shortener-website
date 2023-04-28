<template>
  <section>
    <p>{{ textAboveResult }}</p>
    <p>{{ generatedLink }}</p>
    <button @click="copyOnClick">Copy</button>
  </section>
</template>
<script>
export default {
  name: 'AppResult',
  props: {
    generatedLink: {
      type: String,
      required: false
    },
    textAboveResult: {
      type: String,
      required: true
    }
  },

  methods: {
    copyOnClick() {
      navigator.clipboard.writeText(this.generatedLink);
    }
  }
}
</script>
