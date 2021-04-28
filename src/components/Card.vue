<template lang="html">
  <div>
    <div class="relative bg-white py-6 px-6 w-80 mt-10 shadow-xl">
      <div>
        <div>
          <img
            class="w-full object-cover"
            src="https://www.mercedes-benz.co.uk/passengercars/mercedes-benz-cars/models/cls/coupe-c257/amg/model-lines/_jcr_content/swipeableteaserbox/par/swipeableteaser_185438073/asset.MQ6.12.20191106114837.jpeg"
          />
        </div>
        <p class="text-sm font-semibold mt-2">{{ car.brand.name }}</p>
        <p class="text-xl font-bold">{{ car.name }}</p>
        <p class="text-sm font-semibold mb-2 text-gray-500">
          {{ priceDetection }}.-
        </p>
        <div class="border-t-2 pb-10"></div>
      </div>
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
  },
};
</script>
<style lang=""></style>
