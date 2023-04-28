<template>
  <main>
    <AppInput
      inputType="text"
      labelText="Please put your website address"
      inputPlaceholder="https://example.com"
      v-model="normalLink"
    />
    <AppButton text="Shorten" @submit-link="submitLink" />
    <AppResult textAboveResult="Your generated link:" inputResult="Hello there!" />
  </main>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      normalLink: '',
      generatedLink: ''
    }
  },

  methods: {
    submitLink() {
      console.log(this.normalLink);
    }
  }
}
</script>
