<script>
import { store } from '../data/store'
export default {
    data() {
        return { store }
    },
    methods: {

        /* FUNZIONE CHE RITORNA IL PATH DELL'IMMAGINE */
        getImagePath(img) {
            const url = new URL(`../assets/img/${img}.png`, import.meta.url)
            return url.href
        }
    }
}
</script>

<template>
    <div class="container">
        <ul v-for="movie in store.movies" :key="movie.original_title">
            <li>{{ movie.title }}
                <ul>
                    <li>{{ movie.original_title }}</li>
                    <li><img :src="getImagePath(movie.original_language)" :alt="movie.original_language"></li>
                    <li>{{ movie.vote_average }}</li>
                </ul>
            </li>
        </ul>
    </div>
</template >


