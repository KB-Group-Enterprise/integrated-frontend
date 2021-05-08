<template>
  <div class="flex justify-center">
    <div class="flex w-10/12">
      <div
        id="brandpage"
        class="bg-white p-4 w-full bg-white text-center font-bold text-xl xkb hoverbold"
        @click="changeDynamicComponent('brands')"
      >
        PRODUCT
      </div>
      <div
        class="bg-white p-4 w-full bg-white text-center font-bold text-xl xkb hoverbold"
        @click="changeDynamicComponent('add')"
      >
        ADD
      </div>
    </div>
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
<style>
  .xkb {
  color: #000000;
  font-size: 1.1em;
  position: relative;
}

.xkb:hover {
  color: #000000;
  font-weight: 500;
}

.xkb::after {
  box-sizing: inherit;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  background-color: #000000;
  color: transparent;
  width: 0%;
  content: '';
  height: 2px;
  transition: all 0.2s;
}

.xkb:hover::after {
  width: 100%;
}
.hoverbold:hover {
  font-weight: 600;
}
</style>
