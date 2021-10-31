<template>
  <div class="project">
    <div class="title w-border w-padding"> {{ projectName }} </div>
    <div class="description w-padding simple-text"> {{projectDescription}} </div>
    <div class="project-url w-padding">
      <img src="./../assets/github.png" alt="Github icon">
      <a rel="noopener noreferrer" target="_blank" :href=projectUrl> Confere no github! </a> 
    </div>
    <div  class="tag-deck">
      <Tag v-for="(item, index) in technologies" :key="index" :tagName="item" />
    </div>
  </div>
</template>

<script>
import Tag from './Tag.vue'

export default {
  name: 'Project',
  components: {
    Tag,
  },
  props: {
    projectName: String,
    projectDescription: String,
    projectUrl: String,
    technologies: Array
  },
}
</script>

<style scoped>
  .project {
    display: flex;
    flex-direction: column;
    text-align: start;
    background-color: var(--thirdy-color);
    border-left: 15px solid var(--secondary-color);
    font-size: 1rem;
    width: auto;
    height: auto;
    margin: 2% 1%;
  }

  .tag-deck {
    display: flex;
    flex-direction: row;
    position: relative;
    bottom: 5px;
    left: 5px;
    flex-wrap: nowrap;
  }

  .simple-text {
    font-weight: 300;
  }

  .w-border {
    border-bottom: 1px solid var(--secondary-color);
  }

  .w-padding {
    padding: 10px 5px 10px 12px;
    margin-bottom: auto;
  }


</style>
