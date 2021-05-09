<template lang="html">
  <div>
    <div>
      <div
        v-for="carTypenaja in carType"
        :key="carTypenaja.id"
        class="xkb2 mb-1 hoverbold cursor-pointer text-xl pb-1"
        :class="{ xkb4: selectedCarTypeId == carTypenaja.id }"
        @click="selectedCarTypeId = carTypenaja.id"
      >
        {{ carTypenaja.name }}
      </div>
    </div>
    <div class="hidden lg:block">
      <div class="bg-white text-xl font-bold pl-10 mt-10">CarType</div>
      <div class="flex flex-col pl-10 pt-5">
        <div class="border-b-2 mb-5 w-2/3"></div>
        <div
          v-for="carTypenaja in carType"
          :key="carTypenaja.id"
          class="xkb2 mb-1 hoverbold cursor-pointer text-xl pb-1"
          :class="{ xkb4: selectedCarTypeId == carTypenaja.id }"
          @click="selectedCarTypeId = carTypenaja.id"
        >
          {{ carTypenaja.name }}
        </div>
        <div class="border-t-2 mt-3 w-2/3"></div>
        <div
          class="xkb2 mb-2 hoverbold cursor-pointer text-xl pt-2 mt-3 pb-1"
          :class="{ xkb4: selectedCarTypeId == 'all' }"
          @click="
            selectedCarTypeId = 'all';
            this.$emit('selected-cartype', 'all');
          "
        >
          ALL
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      carType: [],
      selectedCarTypeId: 'all',
      hover: false,
    };
  },
  async mounted() {
    this.$emit('selected-cartype', this.selectedCarTypeId);
  },
  async created() {
    this.carType = await this.getcar();
  },
  methods: {
    async getcar() {
      const res = await this.getHttp('/api/cartypes');
      return res.data;
    },
  },
  watch: {
    selectedCarTypeId() {
      this.$emit('selected-cartype', this.selectedCarTypeId);
    },
  },
};
</script>
<style>
.xkb2 {
  color: #000000;
  font-size: 1.1em;
  position: relative;
}

.xkb2:hover {
  color: #000000;
  font-weight: 500;
}

.xkb2::after {
  box-sizing: inherit;
  position: absolute;
  bottom: 0;
  left: 0;
  margin: auto;
  text-align: left;
  background-color: #000000;
  color: transparent;
  width: 0%;
  content: '';
  height: 2px;
  transition: all 0.2s;
}

.xkb4::after {
  box-sizing: inherit;
  position: absolute;
  bottom: 0;
  left: 0;
  margin: auto;
  text-align: left;
  background-color: #000000;
  color: transparent;
  width: 50%;
  content: '';
  height: 2px;
  transition: all 0.2s;
}

.xkb2:hover::after {
  width: 50%;
}
</style>
