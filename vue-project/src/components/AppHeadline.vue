<template>
    <h1 class="mb-6 text-xl xl:text-4xl font-bold text-center xl:text-left">{{ headline }}</h1>
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
  