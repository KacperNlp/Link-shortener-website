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
      if (this.checkIfLinkIsCorrect(this.normalLink)) {
        const objectToBitly = {
          long_url: this.normalLink
        }

        await fetch('https://api-ssl.bitly.com/v4/shorten', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${APP_TOKEN}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(objectToBitly)
        })
          .then((res) => {
            if (res.ok) {
              return res.json()
            }

            this.generatedLink = ''
            throw new Error(`Problem with connection, status code: ${res.status}`)
          })
          .then((res) => {
            this.generatedLink = res.link
          })
          .catch((err) => {
            if (err) {
              alert('Sorry we have problem with connection! :/')
            }
          })
      }
    },

    checkIfLinkIsCorrect(link) {
      if (!link.includes('https://') && !link.includes('http://')) {
        this.generatedLink = ''
        alert('You put a wrong value! It has to be a link')
        return false
      }

      return true
    }
  }
}
</script>
