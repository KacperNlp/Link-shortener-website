<template>
  <section class="md:p-8 md:bg-slate-200">
    <p class="mb-2">{{ textAboveResult }}</p>
    <div class="flex flex-row bg-white rounded">
      <p class="h-[22px] w-full p-2">{{ generatedLink }}</p>
      <button
        @click="copyOnClick"
        class="bg-slate-300 hover:bg-slate-400 p-2 rounded-tr rounded-br duration-200"
      >
        <v-icon name="co-paperclip" />
      </button>
    </div>
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
      navigator.clipboard.writeText(this.generatedLink)
    }
  }
}
</script>
