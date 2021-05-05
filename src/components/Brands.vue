<template>
  <div class="flex justify-center w-full">
    <div class="w-10/12 bg-white">
      <Dropdown @selected-brand="setSelectedBrand"></Dropdown>
      <CardContainer :cars="carsInBrand"></CardContainer>
    </div>
  </div>
</template>

<script>
import Dropdown from '@/components/Dropdown.vue';
import CardContainer from '@/components/CardContainer.vue';
export default {
  name: 'brands',
  components: {
    Dropdown,
    CardContainer,
  },
  data() {
    return {
      brandId: '',
      carsInBrand: [],
    };
  },
  methods: {
    setSelectedBrand(brandId) {
      this.brandId = brandId;
    },
  },
  watch: {
    async brandId() {
      const res = await this.getHttp(`/api/cars/brand/${this.brandId}`);
      this.carsInBrand = res.data;
    },
  },
};
</script>
