<template>
  <span class="mb-3"> Page {{ currentPage }} of {{ totalpage }} </span>
  <div class="flex justify-center">
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="chevron-left"
      class="svg-inline--fa fa-chevron-left fa-w-10 w-1/12 mr-4 md:w-5 cursor-pointer"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      @click="previous"
    >
      <path
        fill="currentColor"
        d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
      ></path>
    </svg>
    <!-- <div
      @click="currentPage = i"
      v-for="i in 3"
      :key="i"
      class="bg-primary text-white mx-2 p-1 px-3"
    >
      {{ i }}
    </div> -->
    <!-- <input
      type="text"
      v-model="currentPage"
      class="w-1/6 text-center text-xl"

    /> -->
    <div class="w-1/6 text-xl text-center flex items-center justify-center">
      {{ currentPage }}
    </div>
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="chevron-right"
      class="svg-inline--fa fa-chevron-right fa-w-10 w-1/12 md:w-5 ml-4 cursor-pointer"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      @click="next"
    >
      <path
        fill="currentColor"
        d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
      ></path>
    </svg>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'pagination',
  props: ['totalpage'],
  data() {
    return {
      currentPage: 1,
    };
  },
  methods: {
    next() {
      this.currentPage++;
    },
    previous() {
      this.currentPage--;
    },
  },
  mounted() {
    this.$emit('changepage', this.currentPage - 1);
  },
  computed: mapState(['isPageChanged']),
  watch: {
    currentPage() {
      if (this.currentPage > this.totalpage) this.currentPage = this.totalpage;
      else if (this.currentPage <= 0) this.currentPage = 1;
      else {
        this.$emit('changepage', this.currentPage - 1);
      }
    },
    isPageChanged() {
      this.currentPage = 1;
      this.$store.dispatch('changePage', false);
    },
  },
};
</script>
