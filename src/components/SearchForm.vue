<script>
export default {
    data() {
        return {
            searchTerm: ''
        }
    },
    emits: ['term-change', 'form-submit']
}
</script>

<template>
    <form class="d-flex w-50" @submit.prevent="$emit('form-submit')">
        <input class="form-control" placeholder="Cerca un film o una serie tv..." v-model.trim="searchTerm"
            @keyup="$emit('term-change', searchTerm)">
        <button type="submit" class="btn btn-primary">Cerca</button>
    </form>
</template>