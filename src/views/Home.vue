<template>
  <div class="home bg-gray-400">
    <Card></Card>
    <button @click="showBackEndStatus">Check Status Backend</button>
    <p>{{ status }}</p>
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
      console.log(process.env);
      const res = await this.getHttp('/api/health');
      this.status = res.data;
    },
  },
};
</script>
