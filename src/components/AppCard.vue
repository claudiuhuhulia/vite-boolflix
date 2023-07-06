<script>

export default {
    props: {
        item: Object
    },
    computed: {
        hasFlag() {
            const availableFlags = ['it', 'en'];
            return availableFlags.includes(this.item.original_language)
        },
        title() {
            return item.title || item.name
        },
        originalTitle() {
            return item.original_title || item.original_name
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

        <ul>
            <li>
                <h2>{{ title }}</h2>
            </li>

            <li>{{ originalTitle }}</li>
            <li>
                <img v-if="hasFlag" :src="getImagePath(item.original_language)" :alt="item.original_language">
                <span v-else>{{ item.original_language }}</span>
            </li>
            <li>{{ item.vote_average }}</li>


        </ul>
    </div>
</template >


