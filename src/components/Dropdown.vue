<template>
  <div class="mb-5 pt-5">
    <select
      v-model="selectedBrandId"
      name="cars"
      id="cars"
      class="w-full outline-none py-3 text-xl lg:hidden"
    >
      <option v-for="brand in brands" :value="brand.id" :key="brand.id">
        {{ brand.name }}
      </option>
    </select>
    <div class="hidden lg:flex justify-evenly">
      <div
        @click="selectedBrandId = brand.id"
        class="bg-white p-3 flex-1 mx-3 flex justify-center items-center text-center cursor-pointer hover:bg-gray-200"
        v-for="brand in brands"
        :key="brand.id"
      >
        {{ brand.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'drop-down',
  data() {
    return {
      selectedBrandId: '',
      brands: [{ id: 'all', name: 'All' }],
    };
  },
  async mounted() {
    const res = await this.getHttp('/api/brands');
    this.brands = [...this.brands, ...res.data];
    this.selectedBrandId = this.brands[0].id;
  },
  watch: {
    selectedBrandId() {
      this.$emit('selected-brand', this.selectedBrandId);
    },
  },
};
</script>
