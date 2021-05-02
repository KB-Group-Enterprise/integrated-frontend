import axios from 'axios';

let baseURL = 'http://13.94.1.42:5000';
export default axios.create({
  baseURL,
});
