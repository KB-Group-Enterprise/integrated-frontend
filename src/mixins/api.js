import axios from '@/axios.js';
export default {
  methods: {
    async getHttp(api) {
      try {
        let res = await axios.get(`${api}`);
        return res;
      } catch (e) {
        if (
          e.response.data.message === 'No such requested page' &&
          e.response.status === 404
        ) {
          return e.response;
        } else {
          this.$store.dispatch('showToast', {
            toastType: 'error',
            msg: `Error ${e.response.status} : ${e.response.data.message}`,
          });
        }
      }
    },
    async postHttp(api, data) {
      try {
        const res = await axios.post(`${api}`, data);
        return res;
      } catch (e) {
        console.error(e);
        this.$store.dispatch('showToast', {
          toastType: 'error',
          msg: `Error ${e.response.status} : ${e.response.message}`,
        });
      }
    },
    async putHttp(api, data) {
      try {
        const res = await axios.put(`${api}`, data);
        return res;
      } catch (e) {
        console.error(e);
        this.$store.dispatch('showToast', {
          toastType: 'error',
          msg: `Error ${e.response.status} : ${e.response.message}`,
        });
      }
    },
    async deleteHttp(api) {
      try {
        const res = await axios.delete(`${api}`);
        return res;
      } catch (e) {
        console.error(e);
        this.$store.dispatch('showToast', {
          toastType: 'error',
          msg: `Error ${e.response.status} : ${e.response.message}`,
        });
      }
    },
    getAxios() {
      return axios;
    },
  },
};
