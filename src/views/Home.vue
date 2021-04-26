<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button @click="showBackEndStatus">Check Status Backend</button>
    <p>{{ status }}</p>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
export default {
  name: 'Home',
  components: {
    HelloWorld,
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
