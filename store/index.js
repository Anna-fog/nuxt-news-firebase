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
    },
    addPost(state, post) {
      state.loadedPosts.push(post)
    },
    editPost(state, editedPost) {
      const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id);
      state.loadedPosts[postIndex] = editedPost
    }
  },

  actions: {
    nuxtServerInit({ commit }, context) {
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
    addPost(vuexContext, post) {
      const createdPost = {...post, updatedDate: new Date()}
      return axios
        .post('https://nuxt-blog-50d1a-default-rtdb.europe-west1.firebasedatabase.app/posts.json', createdPost)
        .then(res => {
          vuexContext.commit('addPost', {...createdPost, id: res.data.name})
        })
        .catch(e => console.log(e))
    },
    editPost(vuexContext, editedPost) {
      return  axios.put('https://nuxt-blog-50d1a-default-rtdb.europe-west1.firebasedatabase.app/posts/' +
        editedPost.id + '.json', editedPost)
        .then(res => {
          vuexContext.commit('editPost', editedPost)
        })
        .catch(e => console.log(e))
    }
  },

  getters: {
    loadedPosts(state) {
      return state.loadedPosts
    }
  }
}
