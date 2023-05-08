<template>
  <main
    class="flex flex-col md:flex-row justify-center md:h-[450px] md:w-11/12 md:max-w-[750px] mx-auto md:shadow-xl"
  >
    <AppHeadlineWithImg />
    <div class="flex flex-col w-full bg-slate-100">
      <div class="flex flex-col justify-end h-full gap-4 p-8 pb-4 md:pb-14">
        <AppInput
          inputType="text"
          labelText="Please put your website address"
          inputPlaceholder="https://example.com"
          v-model="normalLink"
        />
        <AppButton text="Shorten" @submit-link="submitLink" />
      </div>
      <AppResult textAboveResult="Your generated link:" :generatedLink="generatedLink" />
    </div>
  </main>
</template>

<script>
import { APP_TOKEN } from './config'

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
    async submitLink() {
      this.generatedLink = this.normalLink

      await fetch(`https://api.shrtco.de/v2/shorten?url=${this.normalLink}`)
        .then((res) => {
          if (res.ok) {
            return res.json()
          }

          throw new Error('We cannot get response status code ' + res.status)
        })
        .then((res) => {
          this.generatedLink = res.result.short_link3
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

//app token
