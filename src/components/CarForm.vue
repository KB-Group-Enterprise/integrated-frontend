<template lang="html">
  <section class="w-full flex justify-center min-h-content">
    <div class="w-10/12 bg-white flex justify-center">
      <div class="w-10/12">
        <div class="flex justify-between">
          <h1 class="text-3xl my-5">{{ title }}</h1>
        </div>
        <div class="m-2 p-3 w-48 border border-black">
          <input type="checkbox" @change="autofill" />
          <label class="ml-2">Autofill</label>
        </div>
        <div>
          <h4 class="p-3">Preview</h4>
          <div
            class="flex flex-wrap w-full border border-gray-200 p-1 lg:p-3 lg:my-2"
          >
            <div
              v-for="preview in previews"
              :key="preview"
              class="flex flex-col items-center md:flex-wrap"
            >
              <img :src="preview" class="w-full object-cover m-2" />
              <button
                class="btn bg-red-500 p-2 w-11/12 text-white font-bold"
                @click="deleteImg(previews.indexOf(preview))"
              >
                DELETE
              </button>
            </div>
            <button
              @click="chooseFiles()"
              class="w-full m-2 p-3 md:w-4/12 lg:w-60 h-48 bg-white border border-gray-200 hover:bg-gray-200 text-6xl font-bold"
            >
              +
            </button>
          </div>
        </div>
        <div class="flex">
          <div class="p-3 text-white font-bold bg-gray-800">Uploaded</div>
          <div class="p-3 border border-gray-200 font-bold">
            <span class="text-green-800">{{ addedImgs }}</span> Images
          </div>
        </div>
        <form @submit.prevent="saveCar" class="flex flex-col w-10/12">
          <div class="flex flex-col">
            <input
              id="fileUpload"
              class="m-3 w-full lg:w-4/12"
              :class="{ danger: errors.images }"
              @change="imageAdd"
              type="file"
              hidden
            />
            <div v-if="errors.images" class="text-red-500 ml-5">
              {{ errors.images }}
            </div>
          </div>
          <label for="colors" class="mt-5 mb-3">Pick Color</label>
          <div class="flex flex-wrap mb-5">
            <div
              v-for="color in display_colors"
              :key="color"
              class="font-bold flex border border-gray-200 mr-5 mb-5"
            >
              <div
                class="w-14 h-full flex justify-center p-4 pt-3.5 border border-gray-200 border-l-0 border-t-0 border-b-0"
                :style="{ backgroundColor: color.hex, color: color.hex }"
              >
                <input
                  type="checkbox"
                  name="color"
                  style="margin-top: 0.4rem"
                  @change="toggleInsert(color)"
                  :checked="getChecked(color)"
                />
              </div>
              <div class="p-3 pt-3.5 w-20">
                {{ capitalize(color.name) }}
              </div>
            </div>
          </div>
          <div v-if="errors.colors" class="text-red-500 ml-5">
            {{ errors.colors }}
          </div>
          <section class="flex flex-col lg:grid lg:grid-cols-2">
            <div class="flex flex-col">
              <label for="name">Name</label>
              <input
                class="m-3 w-10/12 p-3"
                :class="{ danger: errors.name }"
                id="name"
                type="text"
                v-model="car.name"
              />
              <div v-if="errors.name" class="text-red-500 ml-5">
                {{ errors.name }}
              </div>
              <div v-if="errors.nameExist" class="text-red-500 ml-5">
                {{ errors.nameExist }}
              </div>
            </div>
            <div class="flex flex-col">
              <label for="price">Price (THB)</label>
              <input
                class="m-3 w-10/12"
                :class="{ danger: errors.price }"
                id="price"
                type="number"
                v-model="car.price"
              />
              <div v-if="errors.price" class="text-red-500 ml-5">
                {{ errors.price }}
              </div>
            </div>
            <div class="flex flex-col">
              <label for="description">Description</label>
              <input
                class="m-3 w-10/12"
                :class="{ danger: errors.description }"
                id="description"
                type="text"
                v-model="car.description"
              />
              <div v-if="errors.description" class="text-red-500 ml-5">
                {{ errors.description }}
              </div>
            </div>
            <div class="flex flex-col">
              <label for="horsepower">Horsepower</label>
              <input
                class="m-3 w-10/12"
                :class="{ danger: errors.horsepower }"
                id="horsepower"
                type="number"
                v-model="car.horsepower"
              />
              <div v-if="errors.horsepower" class="text-red-500 ml-5">
                {{ errors.horsepower }}
              </div>
            </div>
            <div class="flex flex-col">
              <label for="releasedate">Release Date</label>
              <input
                class="m-3 w-10/12"
                :class="{ danger: errors.releasedate }"
                id="releasedate"
                type="date"
                v-model="car.releasedate"
              />
              <div v-if="errors.releasedate" class="text-red-500 ml-5">
                {{ errors.releasedate }}
              </div>
            </div>
            <div class="flex flex-col">
              <label for="releasedate">Brand</label>
              <select
                v-model="car.brand"
                :class="{ danger: errors.brand }"
                name="brand"
                id="brand"
                class="m-3 p-1 border border-black w-2/4 lg:w-4/12"
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
              <div v-if="errors.brand" class="text-red-500 ml-5">
                {{ errors.brand }}
              </div>
            </div>
            <div class="flex flex-col">
              <label for="releasedate">Car Type</label>
              <select
                v-model="car.cartype"
                :class="{ danger: errors.cartype }"
                name="type"
                id="type"
                class="m-3 p-1 border border-black w-2/4 lg:w-4/12"
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
              <div v-if="errors.cartype" class="text-red-500 ml-5">
                {{ errors.cartype }}
              </div>
            </div>
          </section>
          <input
            class="btn m-3 bg-black text-white hover:bg-gray-800 cursor-pointer w-4/12 h-10 font-bold"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
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
    title: {
      type: String,
      default: function () {
        return 'Car Form';
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
      errors: {},
      danger: 'danger',
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
    getChecked(color) {
      const exist = this.car.colors
        .filter((carColor) => carColor.id === color.id)
        .pop();
      if (exist) {
        return true;
      }
      return false;
    },
    toggleInsert(color) {
      const existInCar = this.car.colors.filter((item) => item.id === color.id);
      if (existInCar.length === 0) {
        const index = this.display_colors.indexOf(color);
        this.car.colors.push(this.original_colors[index]);
      } else {
        this.car.colors.splice(this.car.colors.indexOf(existInCar[0]), 1);
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
      console.log(file);
      if (file) {
        if (file.type === 'image/png' || file.type == 'image/jpeg') {
          if (file.size <= 5 * 5000000) {
            this.images.push(file);
            this.previews.push(URL.createObjectURL(file));
            this.isImageUpdate = true;
          } else {
            this.$store.dispatch('showToast', {
              toastType: 'error',
              msg: 'File Exceeded 5MB',
            });
          }
        } else {
          this.$store.dispatch('showToast', {
            toastType: 'error',
            msg: 'MediaType Not Supported',
          });
        }
      }
    },
    async saveCar() {
      if (await this.carValidator()) {
        const formData = new FormData();
        formData.append('car', JSON.stringify(this.car));
        if (this.images.length > 0 && this.isImageUpdate) {
          this.images.forEach((image) => formData.append('images', image));
        }
        this.$emit('save', formData);
      }
    },
    async carValidator() {
      const rules = {
        hasError: false,
        errors: {},
        name(name) {
          if (name === '') {
            const msg = 'Name is required';
            rules.errors.name = msg;
            rules.hasError = true;
            rules.nameChecked = true;
          }
        },
        price(price) {
          if (price <= 0) {
            const msg = 'Price must be higher than zero';
            rules.errors.price = msg;
            rules.hasError = true;
          }
        },
        description(desc) {
          if (desc === '') {
            const msg = 'Description is required';
            rules.errors.description = msg;
            rules.hasError = true;
          }
        },
        horsepower(hpw) {
          if (hpw <= 0) {
            const msg = 'Horse Power must be grater than zero';
            rules.errors.horsepower = msg;
            rules.hasError = true;
          }
        },
        releasedate(date) {
          if (date === '') {
            const msg = 'Release Date is required';
            rules.errors.releasedate = msg;
            rules.hasError = true;
          }
        },
        brand(brand) {
          if (!brand.id) {
            const msg = 'Brand is required';
            rules.errors.brand = msg;
            rules.hasError = true;
          }
        },
        cartype(cartype) {
          if (!cartype.id) {
            const msg = 'Cartype is required';
            rules.errors.cartype = msg;
            rules.hasError = true;
          }
        },
        colors(colors) {
          if (colors.length < 1) {
            const msg = 'Required at least one color';
            rules.errors.colors = msg;
            rules.hasError = true;
          }
        },
      };
      for (const key in this.car) {
        if (Object.hasOwnProperty.call(this.car, key)) {
          const value = this.car[key];
          const validator = rules[key];
          if (validator) {
            validator(value);
          }
        }
      }
      if (this.images.length < 1) {
        rules.errors.images = 'require atleast 1 image';
        rules.hasError = true;
      }
      if (!rules.errors.name) {
        const res = await this.getHttp(`/api/cars/namecheck/${this.car.name}`);
        if (res.status === 200 && res.data) {
          if (!this.car.id) {
            rules.errors.nameExist = 'Name Already Exist';
            rules.hasError = true;
          }
        }
      }
      this.errors = rules.errors;
      console.log(this.errors);
      return !rules.hasError;
    },
    capitalize(s) {
      return s.charAt(0).toUpperCase() + s.slice(1);
    },
  },
};
</script>
<style scoped>
input {
  border: 1px solid lightgray;
  padding: 0.5rem;
}
select {
  border: 1px solid lightgray;
  padding: 0.5rem;
}
img {
  width: 200px;
  height: 150px;
}
.danger {
  border: 1px solid red;
}
</style>
