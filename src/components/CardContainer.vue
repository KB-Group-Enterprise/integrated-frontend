<template>
  <div class="flex flex-col md:flex-row">
    <Card v-for="car in cars" :key="car.id" :car="car"></Card>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
export default {
  name: 'card-container',
  props: ['cars'],
  components: {
    Card,
  },
};
</script>
