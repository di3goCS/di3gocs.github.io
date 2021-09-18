<template>
  <div id="app">
    <Section/>
    <Footer/>
  </div>
</template>

<script>
import Section from './components/Section.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Section,
    Footer,
  },
  props: {
    greeting: String,
    someNumber: Number
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap');

* {
	margin: 0px;
	padding: 0px;
	--primary-color: #ddfff8;
	--secondary-color:#00b894;
  --thirdy-color: #8dfae4;
	--black-tone: #101110;
}

#app {
  font-family: 'Josefin Sans', Avenir, Helvetica, Arial, sans-serif;
  font-weight: 700;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--black-tone);
  margin-top: 3%;
}

html, body {
	min-height: 100%;
	overflow-x: hidden;
  height: 100vh;
  padding: 0;
}

body {
  margin: 0;
  width: auto;
  height: auto;
  background-color: var(--primary-color);
}

.main-text {
  font-size: 1.5em;
}

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background-color: var(--primary-color);
  border-radius: 30px;
}

::-webkit-scrollbar-thumb {
  background-color: var(--secondary-color);
  border-radius: 10px;
}

::-webkit-scrollbar-button:single-button {
  background-color: var(--secondary-color);
  display: block;
  border-style: solid;
  height: 13px;
  width: 16px;
}

::-webkit-scrollbar-button:single-button:vertical:decrement {
  border-width: 0 8px 8px 8px;
  border-color: transparent transparent var(--thirdy-color) transparent;
}

::-webkit-scrollbar-button:single-button:vertical:decrement:hover {
  border-color: transparent transparent var(--primary-color) transparent;
}

::-webkit-scrollbar-button:single-button:vertical:increment {
  border-width: 8px 8px 0 8px;
  border-color: var(--thirdy-color) transparent transparent transparent;
}

::-webkit-scrollbar-button:vertical:single-button:increment:hover {
  border-color: var(--primary-color)  transparent transparent transparent;
}

</style>
