<template>
  <div class="flex justify-center w-full">
    <div class="w-10/12 bg-white">
      <Dropdown @selected-brand="setSelectedBrand"></Dropdown>
      <CardContainer :cars="carsInBrand"></CardContainer>
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
export default {
  name: 'brands',
  components: {
    Dropdown,
    CardContainer,
    Pagination,
  },
  data() {
    return {
      brandId: 1,
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
