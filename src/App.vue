<script>
import axios from 'axios'
import { store } from './data/store'
import { api } from './data/index'
import SearchForm from './components/SearchForm.vue'
import AppCard from './components/AppCard.vue'
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


    /* FUNZIONE CHE TIENE TRACCIA DEL TESTO */
    onTermChange(term) {
      this.dbFilter = term
    },

    /* FUNZIONE CHE FA LE CHIAMATE API */
    searchProd() {

      const axiosConfig = {
        params: {
          language: api.language,
          api_key: api.key,
          query: this.dbFilter
        }
      }


      axios.get(`${api.baseUri}/search/movie`, axiosConfig).then(res => {
        this.store.movies = res.data.results
      })
      axios.get(`${api.baseUri}/search/tv`, axiosConfig).then(res => {
        this.store.series = res.data.results
      })
    }
  }
}
</script>

<template>
  <SearchForm @term-change="onTermChange" @form-submit="searchProd" />

  <h1>Movies</h1>
  <AppCard v-for="movie in store.movies" :key="movie.id" :item="movie" />

  <h1>Series</h1>
  <AppCard v-for="serie in store.series" :key="serie.id" :item="serie" />
</template>