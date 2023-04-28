<template>
  <label>
    <span>{{ labelText }}</span>
    <input
      :value="modelValue"
      @input="updateLinkValue"
      :type="inputType"
      :placeholder="inputPlaceholder"
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
