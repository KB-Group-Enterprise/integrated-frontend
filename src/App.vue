<template>
  <Navbar></Navbar>
  <div class="relative position-content bg-primary">
    <router-view :key="$store.state.componentKey" />
  </div>
  <div class="flex justify-center">
    <notification
      v-if="$store.state.onLoad"
      :msg="$store.state.msg"
      :isOn="$store.state.isToast"
      :type="$store.state.toastType"
    ></notification>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import Notification from './components/Notification';
export default {
  components: {
    Navbar,
    Notification,
  },
};
</script>
