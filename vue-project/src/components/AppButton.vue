<template>
  <button
    class="mx-auto py-2 px-6 bg-green-500 hover:bg-white rounded-lg duration-300 text-white hover:text-green-500 font-bold border-2 border-green-500"
    @click="$emit('submitLink')"
  >
    {{ text }}
  </button>
</template>
<script>
export default {
  name: 'AppButton',
  props: {
    text: {
      type: String,
      required: true
    }
  },

  methods: {
    submitLink() {
      this.$emit('submitLink')
    }
  }
}
</script>
