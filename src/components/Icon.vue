<template>
  <div class="icon">
    <a :href=url target="_blank">
        <img :src="require(`@/assets/${filename}`)" :alt=altText />
    </a>
  </div>
</template>

<script>
export default {
  name: 'Icon',
  components: {},
  props: {
    filename: String,
    url: String,
    altText: String,
  },
}
</script>

<style scoped>

</style>
