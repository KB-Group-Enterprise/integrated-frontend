import axios from '@/axios.js';
export default {
  methods: {
    async getHttp(api) {
      try {
        let res = await axios.get(`${api}`);
        return res;
      } catch (e) {
        console.error(e);
      }
    },
    async postHttp(api, data) {
      try {
        const res = await axios.post(`${api}`, data);
        return res;
      } catch (e) {
        console.error(e);
      }
    },
  },
};
