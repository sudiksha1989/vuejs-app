<template>
  <div id="app">
    <div style="padding: 0 25rem;">
      <add-movie />
      <MoviesList />
    </div>
  </div>
</template>

<script>
import MoviesList from "./components/MoviesList.vue";
import AddMovie from "./components/AddMovie.vue";

export default {
  name: "App",
  components: {
    MoviesList,
    AddMovie
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
