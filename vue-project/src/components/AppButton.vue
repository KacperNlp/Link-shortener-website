<template>
  <button class="p-6">{{ text }}</button>
</template>
<script>
export default {
  name: 'AppButton',
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>
