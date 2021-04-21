import axios from 'axios'

let baseURL =
  process.env.NODE_ENV == 'production'
    ? 'production_url'
    : 'http://localhost:5000/api'
export default axios.create({
  baseURL,
})
