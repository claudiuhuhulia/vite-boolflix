<script>
import axios from 'axios'
import { store } from './data/store'
import SearchForm from './components/SearchForm.vue'
const endpoint = 'https://api.themoviedb.org/3'
export default {
  data() {
    return {
      dbFilter: ''
    }
  },
  name: 'Boolflix',
  components: { SearchForm },
  methods: {


    /* FUNZIONE CHE TIENE TRACCIA DEL TESTO */
    onTermChange(term) {
      this.dbFilter = term
    }
  }

}

</script>

<template>
  <SearchForm @term-change="onTermChange" />
</template>