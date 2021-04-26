import axios from 'axios';

let baseURL =
  process.env.NODE_ENV == 'production'
    ? process.env.BACKEND_URL
    : 'http://localhost:5000';
export default axios.create({
  baseURL,
});
