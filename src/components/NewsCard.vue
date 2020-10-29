<template>
  <div class="film-card">
         <div class="news-item">
            <img src="" alt="">
            <h2>{{ article.title }}</h2>
            <div class="anons"></div>
        </div>
    <router-link
      :to="'/article' + article.id" :key="title">
      Подробнее
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object
    }
  }
}
</script>
