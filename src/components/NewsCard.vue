<template>
<div>
  <div v-for="post in allPosts" :key="post.id">
            <h2>{{ post.title }}</h2>
            
            <p>{{ post.body }}</p>
            </div>
            
    <!-- <router-link
      :to="'/article' + article.id" :key="title">
      Подробнее
    </router-link> -->
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
