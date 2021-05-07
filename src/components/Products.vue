<template>
  <div class="flex w-2/4 justify-evenly">
    <button
      id="brandpage"
      class="bg-white p-4"
      @click="changeDynamicComponent('brands')"
    >
      Products
    </button>
    <button class="bg-white p-4" @click="changeDynamicComponent('add')">
      Add +
    </button>
  </div>
  <keep-alive>
    <component :is="currentComponent"></component>
  </keep-alive>
</template>

<script>
import Brands from '@/components/Brands';
import Add from '@/views/Add.vue';
import Update from '@/views/Update.vue';
import { mapState } from 'vuex';
export default {
  name: 'Products',
  components: {
    Brands,
    Add,
    Update,
  },
  computed: {
    currentComponent() {
      return this.$store.state.currentDynamicComponent;
    },
    ...mapState(['currentDynamicComponent']),
  },
  watch: {
    currentDynamicComponent(newValue) {
      if (newValue != 'update') {
        this.$store.dispatch('insertDataForEdit', null);
      }
    },
  },
  methods: {
    changeDynamicComponent(componentName) {
      this.$store.dispatch('changeDynamicComponent', componentName);
    },
  },
};
</script>
