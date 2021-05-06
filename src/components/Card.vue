<template lang="html">
  <div
    class="relative p-6 bg-white hover:bg-gray-100"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <div>
      <div>
        <div
          class="h-40 md:h-40 xl:h-60 bg-gray-300 animate-pulse"
          v-if="!isImageLoaded"
        ></div>
        <img
          class="h-40 md:h-40 xl:h-60 w-full object-cover"
          :src="currentImageUrl"
          @load="isImageLoaded = true"
          v-show="isImageLoaded"
        />
      </div>
      <div>
        <div class="animate-pulse" v-if="!isImageLoaded">
          <div class="rounded-full my-2 bg-gray-300 h-3 w-2/6"></div>
          <div class="rounded-full bg-gray-300 h-3 w-5/6"></div>
          <div class="rounded-full my-2 bg-gray-300 h-3 w-2/6"></div>
        </div>
        <div v-else>
          <div class="flex justify-center pt-2">
            <div v-for="(bullet, index) in car.pictures" :key="bullet.id">
              <div
                class="mx-1 rounded-full hover:bg-black"
                @click="changeImage(index)"
                :class="[isActive(index) ? 'active' : 'nonActive']"
              ></div>
            </div>
          </div>
          <p class="text-sm font-semibold">{{ car.brand.name }}</p>
          <p class="text-xl font-bold">{{ car.name }}</p>
          <p class="text-sm font-semibold mb-2 text-gray-500">
            {{ priceDetection }}.-
          </p>
        </div>
      </div>
      <div class="border-t-2 pb-5"></div>
      <div class="flex justify-center">
        <div
          class="mb-5 shadow w-11/12"
          :class="[hover ? 'hoverDropDown' : 'nonHoverDropDown']"
        >
          <div class="border p-3 hover:bg-gray-100">Edit</div>
          <div class="border p-3 hover:bg-gray-100">Delete</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: ['car'],
  data() {
    return {
      isImageLoaded: false,
      currentImage: 0,
      currentImageUrl: ``,
      hover: false,
    };
  },
  created() {
    this.currentImageUrl = this.getUrlFormat(0);
  },
  methods: {
    isActive(index) {
      if (index == this.currentImage) {
        return true;
      }
      return false;
    },
    changeImage(index) {
      this.currentImageUrl = this.getUrlFormat(index);
      this.currentImage = index;
    },
    getUrlFormat(index) {
      const baseURL = this.getAxios().defaults.baseURL;
      return `${baseURL}/api/img/${this.car.pictures[index].id}`;
    },
  },
  computed: {
    priceDetection() {
      var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'THB',
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
      });
      let newPrice = formatter.format(this.car.price);
      return newPrice;
    },
  },
};
</script>
<style lang="css">
.active {
  background-color: black;
  width: 0.75rem;
  height: 0.75rem;
}
.nonActive {
  background-color: gray;
  width: 0.5rem;
  height: 0.5rem;
}
.hoverDropDown {
  position: absolute;
  background-color: white;
  z-index: 1;
  animation: fadeInBottom 0.5s ease-out;
}
.nonHoverDropDown {
  position: absolute;
  background-color: white;
  z-index: 1;
  animation: fadeOutBottom 0.5s forwards ease-out;
}
@keyframes fadeInBottom {
  from {
    opacity: 0;
    transform: translateY(-1rem);
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeOutBottom {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translateY(-1rem);
    display: none;
  }
}
</style>
