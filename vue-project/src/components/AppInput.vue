<template>
  <label>
    <span>{{ labelText }}</span>
    <input :type="inputType" :placeholder="inputPlaceholder" />
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
    }
  }
}
</script>
