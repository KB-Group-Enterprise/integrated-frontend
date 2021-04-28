<template>
  <h1>Add Car</h1>
  <form @submit.prevent="sendCar">
    <label for="images">Upload Image</label>
    <input @change="test" id="images" type="file" multiple />
    <input type="submit" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      images: [],
    };
  },
  methods: {
    test(e) {
      this.images = e.target.files;
    },
    async sendCar() {
      const formData = new FormData();
      this.images.forEach((image) => formData.append('images', image));
      const res = await this.postHttp('/api/test/img', formData);
      console.log(res);
    },
  },
};
</script>
<style scoped>
input {
  border: 2px solid black;
}
</style>
