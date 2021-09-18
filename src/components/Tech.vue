<template>
  <div>
    <div class="tech">
        <i :class=techClass :title=techTitle aria-hidden="true"></i>
        <p> {{ name }} </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tech',
  components: {},
  props: {
    techClass: String,
    name: String,
    techTitle: String,
  },
}
</script>

<style scoped>
    i {
      font-size: 6em;
    }

    .tech p {
        margin-top: 8px;
        font-weight: 200;
    }
</style>
