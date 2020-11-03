<template>
<div> 
<h1>{{ post.title}}</h1>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
 export default {
     computed: mapGetters(["allPosts"]),
    methods: mapActions(["fetchPosts"]),
 async mounted() {
    this.fetchPosts();
  }
  }
</script>

