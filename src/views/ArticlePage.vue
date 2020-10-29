<template>
<div> 
<h1>{{ article.title }}</h1>
</div>

    
</template>

<script>
import news from '../store/news'

export default {
  data() {
    return {
      article: null
    }
  },
  created() {
    const article = news.find(article => article.id == this.$route.params.id)
    if (article) {
      this.article = article
    }
  }
}
</script>

