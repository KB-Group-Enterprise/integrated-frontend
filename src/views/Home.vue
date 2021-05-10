<template>
  <div class="home min-h-content flex justify-center">
    <div class="w-10/12 bg-white">
      <banner></banner>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue';
export default {
  name: 'Home',
  components: {
    Banner,
  },
  data() {
    return {
      status: '',
    };
  },
};
</script>
