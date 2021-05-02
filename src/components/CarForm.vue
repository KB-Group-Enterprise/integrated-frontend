<template lang="html">
  <section>
    <h1>Add Car</h1>
    <div class="m-2 p-3 w-48 border border-black">
      <input type="checkbox" @change="autofill" />
      <label class="ml-2">Autofill</label>
    </div>
    <div>
      <h4>Preview</h4>
      <template v-if="previews.length > 0">
        <div class="flex rounded-md bg-gray-200 p-3 m-5">
          <div
            v-for="preview in previews"
            :key="preview"
            class="flex flex-col items-center"
          >
            <img :src="preview" class="w-full object-cover m-2" />
            <button
              class="btn bg-red-500 p-2 shadow border w-10/12 text-white font-bold"
              @click="deleteImg(previews.indexOf(preview))"
            >
              Delete
            </button>
          </div>
          <button
            @click="chooseFiles()"
            class="w-2/12 bg-white rounded hover:bg-gray-100 text-6xl font-bold"
          >
            +
          </button>
        </div>
      </template>
    </div>
    <form @submit.prevent="saveCar" class="flex flex-col w-8/12 m-5">
      <div class="flex flex-col">
        <label for="images">Upload Image : {{ addedImgs }} Images</label>
        <input
          id="fileUpload"
          class="m-3"
          @change="imageAdd"
          type="file"
          multiple
          hidden
        />
      </div>
      <div class="flex m-3">
        <div
          v-for="color in display_colors"
          :key="color"
          class="p-3 m-2 shadow rounded-md font-bold flex"
          :style="{ backgroundColor: color.hex, color: color.hex }"
        >
          <input
            type="checkbox"
            name="color"
            style="margin-top: 0.4rem"
            @change="toggleInsert(color)"
            :checked="getChecked(display_colors.indexOf(color))"
          />
          <label
            for="color"
            class="ml-2"
            style="-webkit-filter: invert(100%); filter: invert(80%)"
            >{{ color.name }}</label
          ><br />
        </div>
      </div>
      <div class="flex flex-col">
        <label for="name">Name</label>
        <input class="m-3" id="name" type="text" v-model="car.name" />
      </div>
      <div class="flex flex-col">
        <label for="price">Price (THB)</label>
        <input class="m-3" id="price" type="number" v-model="car.price" />
      </div>
      <div class="flex flex-col">
        <label for="description">Description</label>
        <input
          class="m-3"
          id="description"
          type="text"
          v-model="car.description"
        />
      </div>
      <div class="flex flex-col">
        <label for="horsepower">Horsepower</label>
        <input
          class="m-3"
          id="horsepower"
          type="number"
          v-model="car.horsepower"
        />
      </div>
      <div class="flex flex-col">
        <label for="releasedate">Release Date</label>
        <input
          class="m-3"
          id="releasedate"
          type="date"
          v-model="car.releasedate"
        />
      </div>
      <div class="flex flex-col">
        <label for="releasedate">Brand</label>
        <select
          v-model="car.brand"
          name="brand"
          id="brand"
          class="m-3 p-2 border border-black"
        >
          <option
            :value="brand"
            v-for="brand in brands"
            :key="brand"
            @change="car.brand = brand"
          >
            {{ brand.name }}
          </option>
        </select>
      </div>
      <div class="flex flex-col">
        <label for="releasedate">Car Type</label>
        <select
          v-model="car.cartype"
          name="type"
          id="type"
          class="m-3 p-2 border border-black"
        >
          <option
            v-for="cartype in cartypes"
            :value="cartype"
            :key="cartype"
            @change="car.brand = brand"
          >
            {{ cartype.name }}
          </option>
        </select>
      </div>
      <input class="m-3" type="submit" />
    </form>
  </section>
</template>

<script>
export default {
  props: {
    origincar: {
      type: Object,
      default: function () {
        return {
          name: '',
          price: 0,
          description: '',
          horsepower: 0,
          releasedate: '',
          brand: {},
          cartype: {},
          colors: [],
        };
      },
    },
    originimgurl: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  data() {
    return {
      car: {
        name: '',
        price: 0,
        description: '',
        horsepower: 0,
        releasedate: '',
        brand: {},
        cartype: {},
        colors: [],
      },
      images: [],
      previews: [],
      brands: [],
      cartypes: [],
      original_colors: [],
      display_colors: [],
      isfilled: false,
      isImageUpdate: false,
    };
  },
  computed: {
    addedImgs() {
      return this.images.length;
    },
  },
  created() {
    this.fetchData();
  },
  mounted() {},
  watch: {
    origincar() {
      this.car = this.origincar;
    },
    originimgurl() {
      this.previews = this.originimgurl;
      this.setImgfiles(this.originimgurl);
    },
  },
  methods: {
    deleteImg(index) {
      this.previews.splice(index, 1);
      this.images.splice(index, 1);
      this.isImageUpdate = true;
    },
    async setImgfiles(urls) {
      for (const url of urls) {
        const res = await fetch(url);
        const blob = await res.blob();
        const index = urls.indexOf(url);
        const picture = this.car.pictures[index];
        if (picture) {
          const file = new File([blob], picture.name, {
            type: picture.filetype,
          });
          this.images.push(file);
        }
      }
    },
    autofill() {
      if (this.isfilled) {
        this.isfilled = false;
      } else {
        this.car.name = 'test';
        this.car.price = 99;
        this.car.description = 'this is test car from frontend';
        this.car.horsepower = 420;
        this.car.releasedate = '2021-04-20';
        this.car.brand = this.brands[0];
        this.car.cartype = this.cartypes[0];
        this.toggleInsert(this.display_colors[0]);
        this.toggleInsert(this.display_colors[1]);
        this.isfilled = true;
        console.log(this.car);
      }
    },
    getChecked(index) {
      const exist = this.car.colors[index];
      if (exist) {
        return true;
      }
      return false;
    },
    toggleInsert(color) {
      const exist = this.car.colors.filter((item) => item.id === color.id);
      if (exist.length === 0) {
        const index = this.display_colors.indexOf(color);
        this.car.colors.push(this.original_colors[index]);
      } else {
        this.car.colors.splice(this.car.colors.indexOf(exist[0]), 1);
      }
    },
    async fetchData() {
      const res_brands = await this.getHttp('/api/brands');
      const res_cartypes = await this.getHttp('/api/cartypes');
      const res_colors = await this.getHttp('/api/colors');
      if (res_brands.data && res_cartypes.data && res_colors.data) {
        this.brands = res_brands.data;
        this.cartypes = res_cartypes.data;
        this.original_colors = res_colors.data;
        this.display_colors = JSON.parse(JSON.stringify(this.original_colors));
        this.display_colors.map((item) => {
          item.checked = false;
        });
      }
    },
    chooseFiles() {
      document.getElementById('fileUpload').click();
    },
    imageAdd(event) {
      const file = event.target.files[0];
      this.images.push(file);
      this.previews.push(URL.createObjectURL(file));
      this.isImageUpdate = true;
    },
    async saveCar() {
      const formData = new FormData();
      formData.append('car', JSON.stringify(this.car));
      if (this.images.length > 0 && this.isImageUpdate) {
        this.images.forEach((image) => formData.append('images', image));
      }
      this.$emit('save', formData);
      // console.log('formData', formData.getAll('images'));
      // const res = await this.postHttp('/api/cars', formData);
      // console.log(res);
    },
  },
};
</script>
<style scoped>
input {
  border: 1px solid black;
  padding: 2px;
}
img {
  width: 200px;
  height: 150px;
}
</style>
