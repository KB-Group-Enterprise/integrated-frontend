<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <Card
      @deletecar="deleteCar"
      v-for="car in cars"
      :key="car.id"
      :car="car"
    ></Card>
  </div>
</template>

<script>
import Card from '@/components/product/Card.vue';
export default {
  name: 'card-container',
  props: ['cars'],
  components: {
    Card,
  },
  methods: {
    deleteCar(carId) {
      this.$emit('deletecar', carId);
    },
  },
};
</script>
