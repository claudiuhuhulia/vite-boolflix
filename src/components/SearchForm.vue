<script>
export default {
    data() {
        return {
            searchTerm: ''
        }
    },
    emits: ['term-change']
}
</script>

<template>
    <div class="container">
        <form class="d-flex mt-4">
            <input class="form-control" placeholder="Cerca un film o una serie tv..." v-model.trim="searchTerm"
                @keyup="$emit('term-change', searchTerm)">
            <button type="submit" class="btn btn-primary" @click="$emit('form-submit')">Cerca</button>
        </form>
    </div>
</template>