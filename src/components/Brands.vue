<template>
  <div class="flex justify-center w-full">
    <div class="w-10/12 bg-white">
      <banner
        msg="TIME TO"
        highlight="CHOSE"
        imgSrc="https://s7d1.scene7.com/is/image/volkswagen/VW_NGW6_Launch_ID4_Homepage_Masthead?Zml0PWNyb3AsMSZmbXQ9anBnJnFsdD03OSZ3aWQ9ODAwJmhlaT04MDAmYWxpZ249MC4wMCwwLjAwJmEzZWU="
      ></banner>
      <Dropdown class="load" @selected-brand="setSelectedBrand"></Dropdown>
      <div class="flex flex-col lg:grid lg:grid-cols-12">
        <CarType
          class="lg:col-span-3 load"
          @selected-cartype="setSelectedCarType"
        ></CarType>
        <CardContainer
          class="lg:col-span-9 load"
          @deletecar="deleteCar"
          :cars="carsInBrand"
        />
      </div>
      <div class="flex justify-center my-32">
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
      const direction = 'desc';
      let res;
      if (this.brandId === 'all' && this.carTypeId === 'all') {
        res = await this.getHttp(
          `/api/cars/pages/${currentPage}/${amount}/${sortBy}/${direction}`
        );
      } else if (this.brandId !== 'all' && this.carTypeId === 'all') {
        res = await this.getHttp(
          `/api/cars/brand/${this.brandId}/pages/${currentPage}/${amount}/${sortBy}/${direction}`
        );
      } else if (this.brandId === 'all' && this.carTypeId !== 'all') {
        res = await this.getHttp(
          `/api/cars/cartype/${this.carTypeId}/pages/${currentPage}/${amount}/${sortBy}/${direction}`
        );
      } else if (this.brandId !== 'all' && this.carTypeId !== 'all') {
        res = await this.getHttp(
          `/api/cars/brand/${this.brandId}/cartype/${this.carTypeId}/pages/${currentPage}/${amount}/${sortBy}/${direction}`
        );
      }
      this.currentPage = currentPage;
      if (res) {
        if (res.status === 200) {
          this.carsInBrand = res.data.list;
          this.totalPage = res.data.total;
        } else {
          this.carsInBrand = [];
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
    async carTypeId() {
      this.currentPage = 0;
      this.$store.dispatch('changePage', true);
      this.showCarResult(this.currentPage);
    },
  },
};
</script>
