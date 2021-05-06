<template lang="html">
  <car-form
    @save="putData"
    :origincar="car"
    :originimgurl="imgUrls"
    title="UPDATE CAR"
  ></car-form>
</template>
<script>
import CarForm from '@/components/CarForm.vue';
export default {
  components: {
    CarForm,
  },
  data() {
    return {
      car: null,
      imgUrls: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const res = await this.getHttp(`/api/cars/${this.$route.params.id}`);
      if (res.status === 200) {
        this.car = await res.data;
        if (res.data.pictures.length > 0) {
          this.mapUrls(res.data.pictures);
        }
      }
    },
    async putData(payload) {
      const res = await this.putHttp(
        `/api/cars/${this.$route.params.id}`,
        payload
      );
      if (res.status === 200) {
        this.$store.dispatch('showToast', {
          toastType: 'success',
          msg: 'Update Successfull',
        });
        this.$store.commit('increment');
      }
    },
    mapUrls(pics) {
      const BASE_URL = this.getAxios().defaults.baseURL;
      let urls = [];
      pics.forEach((pic) => {
        const url = `${BASE_URL}/api/img/${pic.id}`;
        urls.push(url);
      });
      this.imgUrls = urls;
    },
  },
};
</script>
<style lang=""></style>
