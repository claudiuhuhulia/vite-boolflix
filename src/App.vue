<script>
import axios from 'axios'
import { store } from './data/store'
import SearchForm from './components/SearchForm.vue'
import AppCard from './components/AppCard.vue'
const endpoint = 'https://api.themoviedb.org/3'
export default {
  data() {
    return {
      dbFilter: '',
      store
    }
  },
  name: 'Boolflix',
  components: { SearchForm, AppCard },
  methods: {


    /* CHIAMATA API E DESTRUCTURING DEI DATI */
    fetchMovies(url) {
      axios.get(url).then(res => {
        const apiMovies = res.data.results
        store.movies = apiMovies.map(movie => {
          const { title, original_title, original_language, vote_average } = movie
          return { title, original_title, original_language, vote_average }
        })
      })
    },

    /* FUNZIONE CHE TIENE TRACCIA DEL TESTO */
    onTermChange(term) {
      this.dbFilter = term
    },


    /* FUNZIONE CHE CREA LA STRINGA CON LA QUALE VERRA' FATTA LA CHIAMATA API */
    searchSub() {
      const filterdMovies = `${endpoint}/search/movie?api_key=220ffe0e6b689a55de06f78719fd673e&query=${this.dbFilter}&language=it-IT`
      this.fetchMovies(filterdMovies)
    }
  }

}

</script>

<template>
  <SearchForm @term-change="onTermChange" @form-submit="searchSub" />

  <AppCard v-for="movie in store.movies" :key="movie.id" :item="movie" />
</template>