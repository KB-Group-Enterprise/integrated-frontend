<template>
  <div class="flex justify-center">
    <div class="flex w-10/12 bg-white">
      <div class="flex w-full">
        <div class="w-full flex justify-center">
          <div
            id="brandpage"
            class="bg-white p-4 w-full lg:w-1/2 text-center text-xl xkb cursor-pointer"
            @click="changeDynamicComponent('brands')"
            :class="{
              'xkb3 font-bold':
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
            class="bg-white p-4 w-full lg:w-1/2 text-center text-xl xkb cursor-pointer"
            @click="changeDynamicComponent('add')"
            :class="{
              'xkb3 font-bold': $store.state.currentDynamicComponent === 'add',
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
import Add from '@/components/Add.vue';
import Update from '@/components/Update.vue';
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
