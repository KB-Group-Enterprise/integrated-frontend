<template lang="html">
  <div>
    <div class="bg-white text-xl font-bold text-center">CarType</div>
    <div class="flex justify-center">
      <div class="border-b-2 pt-1 w-2/3"></div>
    </div>
    <div class="flex flex-col pl-10 pt-5">
      <div
        v-for="carTypenaja in carType"
        :key="carTypenaja.id"
        class="xkb2 mb-2 hoverbold cursor-pointer text-xl"
      >
        {{ carTypenaja.name }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      carType: [],
      hover: false,
    };
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

.xkb2:hover::after {
  width: 50%;
}
</style>
