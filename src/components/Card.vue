<template>
  <div class="card">
    <div class="title w-border w-padding"> {{ cardName }} </div>
    <div class="description w-padding simple-text"> {{ cardDescription }} </div>
    <a v-if="workUrl != null" target="_blank" class="w-padding" :href=workUrl> Leia aqui! </a>
  </div>
</template>

<script>

export default {
  name: 'Card',
  props: {
    cardName: String,
    cardDescription: String,
    workUrl: String,
  },
}
</script>

<style scoped>
  .card {
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
    border-bottom: 1px dotted var(--secondary-color);
  }

  .w-padding {
    padding: 10px 5px 10px 12px;
    margin-bottom: auto;
  }


</style>
