<template>
<div>
<h1>NewsPage</h1>
<news-list :news="news" />
    </div>
</template>

<script>
import NewsList from '../components/NewsList'
import news from '../store/news'

export default {
    components: {
        NewsList,
    },
    data () {
        return {news}
    }
    
}
</script>
