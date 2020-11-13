<template>
<div>
  <div v-for="post in allPosts" :key="post.id">
            <h2>{{ post.title }}</h2>
            
            <p>{{ post.body }}</p>
            <router-link
      :to="{ name: 'ArticlePage', params: {id: post.id} }">
      Подробнее
    </router-link>
            </div>
            
    
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default { 
  props: {
    id: {
      type: Number,
    }
  },
   computed: mapGetters(["allPosts"]),   
    methods: mapActions(["fetchPosts"]),
 async mounted() {
    this.fetchPosts();
  }
}

</script>
