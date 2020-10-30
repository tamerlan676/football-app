export default({
    actions: {

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
    },
    state: {
        posts: []//Пустой массив для приходящих по API постов
    },
    getters: {
        //Метод, с помощью которого можно получить данные с массива posts
        allPosts(state){ 
            return state.posts 
        }
    },
})