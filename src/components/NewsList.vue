<template>
    <div>
   <news-card v-for="article in news"
      :key="article.id"
      :article="article"
></news-card>
    </div>
    
</template>

<script>
import NewsCard from './NewsCard'
export default {
       props: 
        {
            news: {
                type: Array,
                default: () => []
            }

        },
components: {
    NewsCard
}
}
</script>