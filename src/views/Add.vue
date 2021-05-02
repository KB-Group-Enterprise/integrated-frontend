<template lang="html">
  <car-form @save="postData"></car-form>
</template>
<script>
import CarForm from '@/components/CarForm.vue';
export default {
  components: {
    CarForm,
  },
  methods: {
    async postData(data) {
      const res = await this.postHttp('/api/cars', data);
      console.log(res);
    },
  },
};
</script>
<style lang=""></style>
