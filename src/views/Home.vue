<template>
  <div class="home min-h-content flex justify-center">
    <div class="w-full">
      <Products></Products>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Products from '@/components/Products.vue';
export default {
  name: 'Home',
  components: {
    Products,
  },
  data() {
    return {
      status: '',
    };
  },
};
</script>
