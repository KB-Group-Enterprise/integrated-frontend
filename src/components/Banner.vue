<template lang="html">
  <div class="w-full load mb-10 mt-5">
    <div class="flex bg-white" style="height: 600px">
      <div
        class="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2"
      >
        <div>
          <h2 class="text-3xl font-semibold text-gray-800 md:text-4xl">
            {{ msg }}
            <span class="text-indigo-600">{{ highlight }}</span>
          </h2>
          <p class="mt-2 text-sm text-gray-500 md:text-base">
            {{ desc }}
          </p>
          <div class="flex justify-center lg:justify-start mt-6"></div>
        </div>
      </div>
      <div
        class="hidden lg:block lg:w-1/2"
        style="clip-path: polygon(10% 0, 100% 0%, 100% 100%, 0 100%)"
      >
        <div
          class="h-full object-cover"
          :style="{ backgroundImage: `url(${imgSrc})` }"
        >
          <div class="h-full bg-black opacity-25"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    imgSrc: {
      type: String,
      default() {
        return 'https://www.hyundai.com/content/hyundai/ww/data/news/data/2021/0000016609/image/newsroom-0112-photo-1-2021elantranline-1120x745.jpg';
      },
    },
    msg: {
      type: String,
      default() {
        return 'Get your own';
      },
    },
    highlight: {
      type: String,
      default() {
        return 'Dream Car';
      },
    },
    desc: {
      type: String,
      default() {
        return 'A car, is a wheeled motor vehicle used for transportation. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport peoplerather than goods.';
      },
    },
  },
};
</script>
<style lang=""></style>
