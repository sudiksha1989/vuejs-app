<template>
  <div style="width:100%; margin-left:35rem">
    <form @submit="submit"  style="width:50%;">
        <fieldset>
        <input type="text" placeholder="Title" v-model="title">
        <input type="text" placeholder="Director" v-model="director">
        <input type="text" placeholder="Composer" v-model="composer">
        <input type="text" placeholder="Release date" v-model="release_date">
        </fieldset>
        <input class="button-primary" type="submit" value="Send">
    </form>
  </div>
</template>

<script>
export default {
  name: "AddMovie",
  data() {
    return {
      title: "",
      director: "",
      composer: "",
      release_date: ""
    };
  }
};
</script>