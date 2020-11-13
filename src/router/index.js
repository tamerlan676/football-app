import VueRouter from 'vue-router'
import MainPage from '../views/MainPage'
import NewsPage from '../views/NewsPage'
import ArticlePage from '../views/ArticlePage'



export default new  VueRouter({
    
    mode: 'history',
    hash: false,
    routes: [
        {
            path: '/',
            component: MainPage      
        },
        {
            path: '/news',
            component: NewsPage      
        },
        {
            name: 'ArticlePage',
            path: '/article/:id',
            component: ArticlePage      
        }
        
    ]

  }
  )