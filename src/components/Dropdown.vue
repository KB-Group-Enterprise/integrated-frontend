<template>
  <select
    v-model="selectedBrand"
    name="cars"
    id="cars"
    class="w-full outline-none py-3 text-xl lg:hidden"
  >
    <option
      v-for="brand in brands"
      :value="brand.name.toLowerCase()"
      :key="brand.id"
    >
      {{ brand.name }}
    </option>
  </select>
  <div class="hidden lg:flex justify-evenly">
    <div
      @click="selectedBrand = brand.name"
      class="bg-white p-3 flex-1 mx-3 flex justify-center items-center text-center cursor-pointer hover:bg-gray-200"
      v-for="brand in brands"
      :key="brand.id"
    >
      {{ brand.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'drop-down',
  data() {
    return {
      selectedBrand: '',
      brands: [],
    };
  },
  async mounted() {
    const res = await this.getHttp('/api/brands');
    this.brands = res.data;
    this.selectedBrand = this.brands[0].name.toLowerCase();
  },
  watch: {
    selectedBrand() {
      this.$emit('selected-brand', { brandName: this.selectedBrand });
    },
  },
};
</script>
