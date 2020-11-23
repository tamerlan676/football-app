<template>
<div class="container">
<h1>News</h1>
<news-list/>
    </div>
</template>

<script>
import NewsList from '../components/NewsList'

export default {
    components: {
        NewsList,
    },  
}
</script>

<style lang="css" scoped>
.container{
  width: 1280px;
  margin: 10px auto;
  height: auto;
}

</style>
