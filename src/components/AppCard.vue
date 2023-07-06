<script>
export default {
    props: {
        item: Object
    },
    computed: {

        /* CONTROLLO PRESENZA DELLA BANDIERA */
        hasFlag() {
            const availableFlags = ['it', 'en'];
            return availableFlags.includes(this.item.original_language)
        },

        title() {
            return this.item.title || this.item.name
        },
        originalTitle() {
            return this.item.original_title || this.item.original_name
        },
        setVote() {
            const vote = this.item.vote_average / 2
            return Math.ceil(vote)
        }
    },
    methods: {

        /* FUNZIONE CHE RITORNA IL PATH DELL'IMMAGINE */
        getImagePath(img) {
            const url = new URL(`../assets/img/${img}.png`, import.meta.url)
            return url.href
        },

    }
}
</script>

<template>
    <div class="container">

        <ul>
            <li>
                <h2>{{ title }}</h2>
            </li>

            <li>{{ originalTitle }}</li>
            <li>
                <img v-if="hasFlag" :src="getImagePath(item.original_language)" :alt="item.original_language">
                <span v-else>{{ item.original_language }}</span>
            </li>
            <li>
                <FontAwesomeIcon v-if="setVote < 1" :icon="['far', 'fa-star']" />
                <FontAwesomeIcon v-else :icon="['fas', 'fa-star']" />
                <FontAwesomeIcon v-if="setVote < 2" :icon="['far', 'fa-star']" />
                <FontAwesomeIcon v-else :icon="['fas', 'fa-star']" />

                <FontAwesomeIcon v-if="setVote < 3" :icon="['far', 'fa-star']" />
                <FontAwesomeIcon v-else :icon="['fas', 'fa-star']" />

                <FontAwesomeIcon v-if="setVote < 4" :icon="['far', 'fa-star']" />
                <FontAwesomeIcon v-else :icon="['fas', 'fa-star']" />

                <FontAwesomeIcon v-if="setVote < 5" :icon="['far', 'fa-star']" />
                <FontAwesomeIcon v-else :icon="['fas', 'fa-star']" />


                {{ setVote }}
            </li>
            <li><img :src="`http://image.tmdb.org/t/p/w300/${item.poster_path}`" alt=""> </li>

        </ul>
    </div>
</template >




<!-- <FontAwesomeIcon :icon="['fas', 'fa-star']" /> -->