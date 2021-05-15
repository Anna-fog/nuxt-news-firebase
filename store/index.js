export default {
  state: {
    loadedPosts: []
  },

  mutations: {
    setPosts(state, posts) {
      state.loadedPosts = posts
    }
  },

  actions: {
    nuxtServerInit(vuexContext, context) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          vuexContext.commit('setPosts',
            [
              {
                id: 1,
                thumbnail: 'https://www.bbva.com/wp-content/uploads/2017/08/innovacion-bbva-100817.jpg',
                title: 'Title 1',
                previewText: 'This is a post'
              },
              {
                id: 2,
                thumbnail: 'https://www.orfonline.org/wp-content/uploads/2020/09/tech-1280x720.jpg',
                title: 'Title 2',
                previewText: 'This is another post'
              },
              {
                id: 3,
                thumbnail: 'https://www.bbva.com/wp-content/uploads/2017/08/innovacion-bbva-100817.jpg',
                title: 'Title 3',
                previewText: 'This is a third post'
              }
            ]
          )
          resolve()
        }, 1000)
      })
    },
    setPosts(vuexContext, posts) {
      vuexContext.commit('setPosts', posts)
    },
  },

  getters: {
    loadedPosts(state) {
      return state.loadedPosts
    }
  }
}
