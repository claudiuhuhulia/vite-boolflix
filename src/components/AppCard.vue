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
        },
        setPosterPath() {
            if (!this.item.poster_path) return this.getImagePath('poster-placeholder');
            return `http://image.tmdb.org/t/p/w342/${this.item.poster_path}`
        }

    },
    methods: {

        /* FUNZIONE CHE RITORNA IL PATH DELL'IMMAGINE */
        getImagePath(img) {
            const url = new URL(`../assets/img/${img}.png`, import.meta.url)
            return url.href
        },
        iconClass(n) {
            return n <= this.setVote ? 'fas' : 'far';
        }

    }
}
</script>

<template>
    <div class="my-card">
        <figure class="poster">
            <img :src="setPosterPath" alt="copertina">
        </figure>
        <div class="card-info">
            <h4>Titolo: {{ title }}</h4>
            <h5>Titolo originale: {{ originalTitle }}</h5>
            <p class="my-2">languege: <img v-if="hasFlag" :src="getImagePath(item.original_language)"
                    :alt="item.original_language">
                <span v-else>{{ item.original_language }}</span>
            </p>
            <div class="valutation  my-2">
                Valutazione:
                <FontAwesomeIcon v-for="n in 5" :key="n" :icon="[iconClass(n), 'star']" />
            </div>
            <p>
                Overview: {{ item.overview }}
            </p>
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
    width: 342px;
}

.card-info {
    display: none;
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
}

.my-card:hover .card-info {
    display: block;
    overflow: auto;
}

.my-card:hover {
    background-color: rgb(27, 26, 26, 0.2);


    .poster {
        display: none;
    }
}
</style>




