export default {
  state() {
    return {
      loadedPosts: [],
      token: null
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
    },

    setToken(state, token) {
      state.token = token
    }
  },

  actions: {
    nuxtServerInit({ commit }, context) {
      return context.app.$axios.$get('/posts.json')
      .then(data => {
        const postsArray = []
        for (let key in data) {
          postsArray.push({...data[key], id: key})
        }
        commit('setPosts', postsArray)
      })
      .catch(e => context.error(e))
    },

    setPosts({ commit }, posts) {
      commit('setPosts', posts)
    },

    addPost({ commit }, post) {
      const createdPost = {...post, updatedDate: new Date()}
      return this.$axios
        .$post('/posts.json', createdPost)
        .then(data => {
          commit('addPost', {...createdPost, id: data.name})
        })
        .catch(e => console.log(e))
    },

    editPost({ commit }, editedPost) {
      return this.$axios.$put('/posts/' +
        editedPost.id + '.json', editedPost)
        .then(res => {
          commit('editPost', editedPost)
        })
        .catch(e => console.log(e))
    },

    authenticateUser({ commit }, authData) {
      let authURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + process.env.fbAPIKey
      if (!authData.isLogin) {
        authURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + process.env.fbAPIKey
      }

      return this.$axios
        .$post(authURL, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      }).then(result => {
        commit("setToken", result.idToken)
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
