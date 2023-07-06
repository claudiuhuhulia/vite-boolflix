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
    <div class="my-card">
        <img :src="`http://image.tmdb.org/t/p/w342/${item.poster_path}`" alt="">
        <div class="card-info">
            <h4>{{ title }}</h4>
            <h4>{{ originalTitle }}</h4>
            <p>languege: <img v-if="hasFlag" :src="getImagePath(item.original_language)" :alt="item.original_language">
                <span v-else>{{ item.original_language }}</span>
            </p>
            <div class="valutation">
                Valutazione:
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
            </div>
        </div>

    </div>
</template >


<style lang="scss" scoped>
p {
    img {
        height: 50px;
    }
}

.my-card {
    position: relative;
}

.card-info {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
}

.my-card:hover .card-info {
    display: block;
}
</style>


