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
  },
};
