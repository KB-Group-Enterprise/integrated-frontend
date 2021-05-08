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
        class="bg-white p-3 flex-1 mx-3 flex justify-center items-center text-center cursor-pointer xkb"
        :class="[selectedBrandId === brand.id ? 'font-bold' : '']"
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
<style>
.xkb {
  color: #000000;
  font-size: 1.1em;
  position: relative;
}

.xkb:hover {
  color: #000000;
  font-weight: 500;
}

.xkb::after {
  box-sizing: inherit;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  background-color: #000000;
  color: transparent;
  width: 0%;
  content: '';
  height: 2px;
  transition: all 0.2s;
}

.xkb:hover::after {
  width: 100%;
}
</style>
