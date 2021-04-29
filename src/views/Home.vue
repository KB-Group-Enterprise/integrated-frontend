<template>
  <div class="home bg-black min-h-content flex justify-center">
    <div class="">
      <Brands></Brands>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Brands from '@/components/Brands.vue';
export default {
  name: 'Home',
  components: {
    Brands,
  },
  data() {
    return {
      status: '',
    };
  },
  methods: {
    async showBackEndStatus() {
      const res = await this.getHttp('/api/health');
      console.log(res);
      this.status = res.data;
    },
  },
};
</script>
