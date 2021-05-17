import axios from 'axios'

const axiosBaseUrl = axios.create({
  baseURL: 'https://nuxt-blog-50d1a-default-rtdb.europe-west1.firebasedatabase.app'
})

export default axiosBaseUrl
