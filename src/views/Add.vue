<template lang="html">
  <car-form @save="postData" title="ADD CAR"></car-form>
</template>
<script>
import CarForm from '@/components/CarForm.vue';
export default {
  components: {
    CarForm,
  },
  methods: {
    async postData(payload) {
      const res = await this.postHttp('/api/cars', payload);
      if (res.status === 200) {
        this.$store.dispatch('showToast', {
          toastType: 'success',
          msg: 'Car Added',
        });
        this.$store.commit('increment');
        this.$store.dispatch('changeDynamicComponent', 'brands');
      }
    },
  },
};
</script>
<style lang=""></style>
