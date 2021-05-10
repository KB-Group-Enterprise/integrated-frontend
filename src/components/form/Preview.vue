<template lang="html">
  <div class="flex flex-wrap w-full border border-gray-200 p-1 lg:p-3 lg:my-2">
    <div
      v-for="preview in previews"
      :key="preview"
      class="flex flex-col items-center md:flex-wrap img-load"
    >
      <img :src="preview" class="w-full object-cover m-2" />
      <button
        class="btn border border-red-500 p-2 w-11/12 text-red-500 font-bold"
        @click="deleteImg(previews.indexOf(preview))"
      >
        DELETE
      </button>
    </div>
    <button
      @click="chooseFiles()"
      class="w-full m-2 p-3 md:w-4/12 lg:w-60 h-48 bg-white border border-gray-200 transition-all hover:text-white hover:bg-gray-200 text-6xl font-bold"
    >
      +
    </button>
  </div>
</template>
<script>
export default {
  props: {
    previews: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    deleteImg(index) {
      this.$emit('ondelete', index);
    },
    chooseFiles() {
      this.$emit('choosefile');
    },
  },
};
</script>
<style lang="css" scoped>
@keyframes fadeInleft {
  from {
    opacity: 0;
    transform: translateX(-1rem);
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: scale(0.6, 0.6);
  }
}
.img-load {
  opacity: 0;
  animation: fadeInleft 1s forwards ease-in-out;
}
.img-out {
  animation: fadeOut 1s forwards ease-in-out;
}
img {
  width: 200px;
  height: 150px;
}
</style>
