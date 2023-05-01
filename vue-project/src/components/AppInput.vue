<template>
  <label class="flex flex-col md:mb-8">
    <span class="pb-2">{{ labelText }}</span>
    <input
      :value="modelValue"
      @input="updateLinkValue"
      :type="inputType"
      :placeholder="inputPlaceholder"
      class="py-2 pl-2"
    />
  </label>
</template>
<script>
export default {
  name: 'AppInput',
  props: {
    inputType: {
      type: String,
      required: true
    },
    labelText: {
      type: String,
      required: true
    },
    inputPlaceholder: {
      type: String,
      required: true
    },
    modelValue: String
  },

  emits: ['update:modelValue'],

  methods: {
    updateLinkValue(e) {
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>
