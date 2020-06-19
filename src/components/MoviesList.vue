<template>
  <div>
    <table style="text-align: center;">
      <tr>
        <th>title</th>
        <th>director</th>
        <th>composer</th>
        <th>release_date</th>
      </tr>
      <movie-item v-for="movie in movies" :key="movie.id" :movie="movie"></movie-item>
    </table>
  </div>
</template>

<script>
import MovieItem from "./MovieItem";
import gql from "graphql-tag";
const GET_MOVIES = gql`
  query getMovies {
    movies {
      id
      title
      director
      composer
      release_date
    }
  }
`;
export default {
  name: "MoviesList",
  components: { MovieItem },
  data() {
    return {
      movies: []
    };
  },
  apollo: {
    movies: {
      query: GET_MOVIES
    }
  }
};
</script>