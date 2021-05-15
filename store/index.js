import axios from "axios";

export default {
  state() {
    return {
      loadedPosts: []
    }
  },

  mutations: {
    setPosts(state, posts) {
      state.loadedPosts = posts
    }
  },

  actions: {
    nuxtServerInit({ commit }, context) {
      // return new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     vuexContext.commit('setPosts',
      //       [
      //         {
      //           id: 1,
      //           thumbnail: 'https://www.bbva.com/wp-content/uploads/2017/08/innovacion-bbva-100817.jpg',
      //           title: 'Title 1',
      //           previewText: 'This is a post'
      //         },
      //         {
      //           id: 2,
      //           thumbnail: 'https://www.orfonline.org/wp-content/uploads/2020/09/tech-1280x720.jpg',
      //           title: 'Title 2',
      //           previewText: 'This is another post'
      //         },
      //         {
      //           id: 3,
      //           thumbnail: 'https://www.bbva.com/wp-content/uploads/2017/08/innovacion-bbva-100817.jpg',
      //           title: 'Title 3',
      //           previewText: 'This is a third post'
      //         }
      //       ]
      //     )
      //     resolve()
      //   }, 1000)
      // })

      return axios.get('https://nuxt-blog-50d1a-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
        .then(res => {
          const postsArray = []
          for (let key in res.data) {
            postsArray.push({...res.data[key], id: key})
          }
          commit('setPosts', postsArray)
        })
        .catch(e => context.error(e))
    },
    setPosts({ commit }, posts) {
      commit('setPosts', posts)
    },
  },

  getters: {
    loadedPosts(state) {
      return state.loadedPosts
    }
  }
}
