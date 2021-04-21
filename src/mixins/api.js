import axios from '@/axios'
export default {
  methods: {
    async getHttp(api, obj) {
      try {
        let res = await axios.post(`/${api}`, obj)
        return res
      } catch (e) {
        console.error(e)
      }
    },
  },
}
