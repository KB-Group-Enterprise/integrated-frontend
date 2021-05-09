import axios from 'axios';

let baseURL = 'http://13.94.1.42/backend';
export default axios.create({
  baseURL,
});
