export default({
    actions: {

        getPost({commit, state}, id){
            const post = state.posts.find(post => post.id === id)
            commit('setPost', post)
        },

    //Получаем дынные с сервера
        async fetchPosts(ctx) {
            const res = await fetch(
                'https://jsonplaceholder.typicode.com/posts'
              )
            // Сохраняем полученные данные в переменной posts
            const posts = await res.json()
        
            //Отправляем полученные обновления в мутацию updatePosts
          ctx.commit('updatePosts', posts)
        }
    },
    mutations: {
        //Изменяем старый пустой posts со state, занося в него данные с сервера
        updatePosts(state, posts) {
            state.posts = posts
          },
        setPost(state, post){
            state.currentPost = post
        }
    },
    state: {
        posts: [],//Пустой массив для приходящих по API постов
        currentPost: {}
    },
    getters: {
        //Метод, с помощью которого можно получить данные с массива posts
        allPosts(state){ 
            return state.posts 
        },
        currentPost(state){
            return state.currentPost
        }

    },
})