<template>
    <h1>{{ headline }}</h1>
</template>
<script>
export default {
    name: 'AppHeadline',
    props: {
        headline: {
            type: String,
            required: true
        }
    }
}
</script>
  