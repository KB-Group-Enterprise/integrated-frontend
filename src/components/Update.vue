<template lang="html">
  <car-form
    @save="putData"
    :origincar="car"
    :originimgurl="imgUrls"
    :key="$store.state.dataInCard"
    title="UPDATE CAR"
  ></car-form>
</template>
<script>
import CarForm from '@/components/form/CarForm.vue';
import { mapState } from 'vuex';
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
  computed: mapState(['currentDynamicComponent']),
  watch: {
    currentDynamicComponent() {
      if (this.$store.state.currentDynamicComponent == 'update') {
        this.fetchData();
      }
      this.imgUrls = [];
    },
  },
  methods: {
    async fetchData() {
      const res = await this.getHttp(
        `/api/cars/${this.$store.state.dataInCard}`
      );
      if (res.status === 200) {
        this.car = await res.data;
        if (res.data.pictures.length > 0) {
          this.mapUrls(res.data.pictures);
        }
      }
    },
    async putData(payload) {
      const res = await this.putHttp(
        `/api/cars/${this.$store.state.dataInCard}`,
        payload
      );
      if (res.status === 200) {
        this.$store.dispatch('showToast', {
          toastType: 'success',
          msg: 'Update Successful',
        });
        this.$store.commit('increment');
        this.car = null;
        this.imgUrls = [];
        this.$store.dispatch('insertDataForEdit', null);
        this.$store.dispatch('changeDynamicComponent', 'brands');
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
