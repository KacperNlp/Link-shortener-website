<template>
  <main>
    <AppInput
      inputType="text"
      labelText="Please put your website address"
      inputPlaceholder="https://example.com"
      v-model="normalLink"
    />
    <AppButton text="Shorten" @submit-link="submitLink" />
    <AppResult v-if="isLinkGenereted" textAboveResult="Your generated link:" :generatedLink="generatedLink" />
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

  computed: {
    isLinkGenereted() {
      return !!this.generatedLink
    }
  },

  methods: {
    submitLink() {
      this.generatedLink = this.normalLink
    }
  }
}
</script>
