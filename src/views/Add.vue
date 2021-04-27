<template>
  <h1>Add Car</h1>
  <form @submit.prevent="sendAPI">
    <label for="brand">Brand: </label>
    <input id="brand" v-model="brand" type="text" />
    <input type="submit" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      brand: '',
    };
  },
  methods: {
    async sendAPI() {
      const res = await this.postHttp('/api/brands', { name: this.brand });
      console.log(res);
    },
  },
};
</script>
<style scoped>
    input{
        border: 2px solid black;
    }
</style>