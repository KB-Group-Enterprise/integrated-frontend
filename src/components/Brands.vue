<template>
  <div class="flex justify-center">
    <div class="w-2/3 bg-white">
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
      brandName: '',
      carsInBrand: [],
    };
  },
  methods: {
    setSelectedBrand({ brandName }) {
      this.brandName = brandName;
    },
  },
  watch: {
    async brandName() {
      // const res = await this.getHttp(`/api/brands/${this.brandName}/cars`);
      const res = await this.getHttp('/api/cars');
      console.log(res);
      this.carsInBrand = res.data;
    },
  },
};
</script>
