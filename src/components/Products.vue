<template>
  <div class="flex w-full">
    <button class="bg-white" @click="componentName = 'add'">Add +</button>
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
