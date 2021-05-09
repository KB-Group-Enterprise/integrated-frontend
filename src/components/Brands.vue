<template>
  <div class="flex justify-center w-full">
    <div class="w-10/12 bg-white">
      <banner></banner>
      <Dropdown class="load" @selected-brand="setSelectedBrand"></Dropdown>
      <div class="grid grid-cols-12">
        <CarType
          class="col-span-3 load"
          @selected-cartype="setSelectedCarType"
        ></CarType>
        <CardContainer
          class="col-span-9 load"
          @deletecar="deleteCar"
          :cars="carsInBrand"
        />
      </div>
      <div class="flex justify-center my-5">
        <div class="flex flex-col justify-center items-center">
          <Pagination
            @changepage="showCarResult"
            :totalpage="totalPage"
          ></Pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dropdown from '@/components/Dropdown.vue';
import CardContainer from '@/components/CardContainer.vue';
import Pagination from '@/components/Pagination.vue';
import CarType from '@/components/CarType.vue';
import Banner from '@/components/Banner.vue';
export default {
  name: 'brands',
  components: {
    Dropdown,
    CardContainer,
    Pagination,
    CarType,
    Banner,
  },
  data() {
    return {
      brandId: 1,
      carTypeId: 0,
      carsInBrand: [],
      totalPage: 1,
      currentPage: 0,
      isChangeBrand: false,
    };
  },
  methods: {
    setSelectedBrand(brandId) {
      this.brandId = brandId;
    },
    setSelectedCarType(carTypeId) {
      this.carTypeId = carTypeId;
    },
    async showCarResult(currentPage) {
      const amount = 12;
      const sortBy = 'id';
      const direction = 'asc';
      let res;
      if (this.brandId === 'all') {
        res = await this.getHttp(
          `/api/cars/pages/${currentPage}/${amount}/${sortBy}/${direction}`
        );
      } else {
        res = await this.getHttp(
          `/api/cars/brand/${this.brandId}/pages/${currentPage}/${amount}/${sortBy}/${direction}`
        );
      }
      this.currentPage = currentPage;
      if (res) {
        if (res.status === 200) {
          this.carsInBrand = res.data.list;
          this.totalPage = res.data.total;
        }
      } else {
        this.carsInBrand = [];
      }
    },
    async deleteCar(carId) {
      const res = await this.deleteHttp(`/api/cars/${carId}`);
      if (res.status === 200) {
        this.$store.dispatch('showToast', {
          toastType: 'success',
          msg: 'Car Deleted',
        });
        const carIndex = this.carsInBrand.findIndex((car) => car.id === carId);
        this.carsInBrand.splice(carIndex, 1);
      }
    },
  },
  watch: {
    async brandId() {
      this.currentPage = 0;
      this.$store.dispatch('changePage', true);
      this.showCarResult(this.currentPage);
    },
  },
};
</script>
