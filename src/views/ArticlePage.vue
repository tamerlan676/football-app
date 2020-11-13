<template>
<div> 
<h1>{{ post.title }}</h1>
<p>{{  post.body }}</p>
</div>
</template>

<script>
    export default {
        computed: {
            post() {
                return this.$store.getters.currentPost
            }
        },
        mounted() {
            this.$store.dispatch('getPost', this.$route.params.id)
        }
    }
</script>

