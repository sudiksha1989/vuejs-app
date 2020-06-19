<template>
  <tr :key="movie.id">
    <td>{{ movie.title }}</td>
    <td>{{ movie.director }}</td>
    <td>{{ movie.composer }}</td>
    <td>{{ movie.release_date }}</td>
  </tr>
</template>

<script>
export default {
  name: "MovieItem",
  props: ["movie"]
};
</script>
