import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://back-movies.onrender.com'
})
