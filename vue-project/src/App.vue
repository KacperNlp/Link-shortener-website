<template>
  <main>
    <AppButton text="Shorten" @submit-link="submitLink"/>
    <AppInput
      inputType="text"
      labelText="Please put your website address"
      inputPlaceholder="https://example.com"
    />
  </main>
</template>

<script>
export default {
  name: "App",
  methods: {
    submitLink() {
      console.log('Submit')
    }
  },
}
</script>
