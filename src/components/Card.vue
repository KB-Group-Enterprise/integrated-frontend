<template lang="html">
  <div class="relative bg-white py-6 px-6 hover:bg-gray-100">
    <div>
      <div>
        <div
          class="h-40 md:h-40 xl:h-60 bg-gray-300 animate-pulse"
          v-if="!isImageLoaded"
        ></div>
        <img
          class="h-40 md:h-40 xl:h-60 w-full object-cover"
          :src="imageUrl"
          @load="isImageLoaded = true"
          v-show="isImageLoaded"
        />
      </div>
      <div>
        <div class="animate-pulse" v-if="!isImageLoaded">
          <div class="rounded-full my-2 bg-gray-300 h-3 w-2/6"></div>
          <div class="rounded-full bg-gray-300 h-3 w-5/6"></div>
          <div class="rounded-full my-2 bg-gray-300 h-3 w-2/6"></div>
        </div>
        <div v-else>
          <p class="text-sm font-semibold mt-2">{{ car.brand.name }}</p>
          <p class="text-xl font-bold">{{ car.name }}</p>
          <p class="text-sm font-semibold mb-2 text-gray-500">
            {{ priceDetection }}.-
          </p>
        </div>
      </div>
      <div class="border-t-2 pb-10"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: ['car'],
  data() {
    return {
      isImageLoaded: false,
    };
  },
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
