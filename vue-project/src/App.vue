<template>
  <main>
    <AppInput
      inputType="text"
      labelText="Please put your website address"
      inputPlaceholder="https://example.com"
    />
    <AppButton text="Shorten" @submit-link="submitLink" />
    <AppResult textAboveResult="Your generated link:" inputResult="Hello there!" />
  </main>
</template>

<script>
export default {
  name: 'App',
  methods: {
    submitLink() {
      console.log('Submit')
    }
  }
}
</script>
