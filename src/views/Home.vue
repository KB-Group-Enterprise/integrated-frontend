<template>
  <div class="home bg-gray-400">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Card></Card>
    <button @click="showBackEndStatus">Check Status Backend</button>
    <p>{{ status }}</p>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue';
export default {
  name: 'Home',
  components: {
    Card,
  },
  data() {
    return {
      status: '',
    };
  },
  methods: {
    async showBackEndStatus() {
      const res = await this.getHttp('/api/health');
      this.status = res.data;
    },
  },
};
</script>
