<script>

export default {
    props: {
        item: Object
    },
    computed: {
        hasFlag() {
            const availableFlags = ['it', 'en'];
            return availableFlags.includes(this.item.original_language)
        }
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
        <h1>Movies</h1>
        <ul>
            <li>{{ item.title }}</li>

            <li>{{ item.original_title }}</li>
            <li>
                <img v-if="hasFlag" :src="getImagePath(item.original_language)" :alt="item.original_language">
                <span v-else>{{ item.original_language }}</span>
            </li>
            <li>{{ item.vote_average }}</li>


        </ul>
    </div>
</template >


