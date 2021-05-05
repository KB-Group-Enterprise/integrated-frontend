<template lang="html">
  <div class="relative bg-white py-6 px-6 hover:bg-gray-100">
    <div>
      <div>
        <img class="h-32 md:h-40 xl:h-60 w-full object-cover" :src="imageUrl" />
      </div>
      <p class="text-sm font-semibold mt-2">{{ car.brand.name }}</p>
      <p class="text-xl font-bold">{{ car.name }}</p>
      <p class="text-sm font-semibold mb-2 text-gray-500">
        {{ priceDetection }}.-
      </p>
      <div class="border-t-2 pb-10"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: ['car'],
  computed: {
    priceDetection() {
      var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'THB',
      });
      let newPrice = formatter.format(this.car.price);
      return newPrice;
    },
    imageUrl() {
      const baseURL = this.getAxios().defaults.baseURL;
      return `${baseURL}/api/img/${this.car.pictures[0].id}`;
    },
  },
};
</script>
<style lang=""></style>
