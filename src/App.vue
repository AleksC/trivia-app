<template>
  <div id="app">
    <Navbar/>
    <TriviaApp/>
  </div>
</template>

<script>
import TriviaApp from "./components/TriviaApp.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "app",
  components: {
    TriviaApp,
    Navbar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
