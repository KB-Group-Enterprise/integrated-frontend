<template>
  <div class="home min-h-content flex justify-center">
    <div class="lg:container">
      <div>
        <button @click="showBackEndStatus">Check Status Backend</button>
        <p>{{ status }}</p>
      </div>
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
