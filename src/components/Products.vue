<template>
  <div class="flex w-2/4 justify-evenly">
    <button
      id="brandpage"
      class="bg-white p-4"
      @click="componentName = 'brands'"
    >
      Products
    </button>
    <button class="bg-white p-4" @click="componentName = 'add'">Add +</button>
  </div>
  <keep-alive>
    <component :is="currentComponent"></component>
  </keep-alive>
</template>

<script>
import Brands from '@/components/Brands';
import Add from '@/views/Add.vue';
export default {
  name: 'Products',
  components: {
    Brands,
    Add,
  },
  data() {
    return {
      componentName: 'brands',
    };
  },
  computed: {
    currentComponent() {
      return this.componentName;
    },
  },
};
</script>
