<template>
  <div class="flex justify-center">
    <div class="flex w-10/12 bg-white">
      <div class="flex w-full">
        <div class="w-full flex justify-center">
          <div
            id="brandpage"
            class="bg-white p-4 w-1/2 text-center text-xl xkb"
            @click="changeDynamicComponent('brands')"
            :class="{
              'xkb3 border-black font-bold':
                $store.state.currentDynamicComponent === 'brands',
              'hover:font-black':
                $store.state.currentDynamicComponent !== 'brands',
            }"
          >
            PRODUCT
          </div>
        </div>
        <div class="w-full flex justify-center">
          <div
            class="bg-white p-4 w-1/2 text-center text-xl xkb"
            @click="changeDynamicComponent('add')"
            :class="{
              'xkb3 font-bold':
                $store.state.currentDynamicComponent === 'add',
              'hover:font-black':
                $store.state.currentDynamicComponent !== 'add',
            }"
          >
            ADD
          </div>
        </div>
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
  position: relative;
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

.xkb3::after {
  box-sizing: inherit;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  background-color: #000000;
  color: transparent;
  width: 100%;
  content: '';
  height: 2px;
  transition: all 0.2s;
}

.xkb:hover::after {
  width: 100%;
}
</style>
