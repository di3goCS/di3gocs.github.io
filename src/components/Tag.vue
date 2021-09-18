<template>
  <div v-if="tagUrl != null" class="tag">
      <a target="_blank" :href=tagUrl > {{ tagName }} </a>
  </div>
  <div v-else class="tag">
      {{ tagName }}
  </div>
</template>

<script>
export default {
  name: 'Tag',
  components: {},
  props: {
    tagName: String,
    tagUrl: String,
  },
}
</script>

<style scoped>
.tag {
  display: block;
  text-align: center;
  font-size: 1rem;
  background-color: var(--secondary-color);
  width: auto;
  height: auto;
  padding: 8px;
  margin: 3px 3px;
}
</style>
