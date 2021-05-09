<template>
  <Navbar></Navbar>
  <div class="relative position-content bg-white lg:bg-primary">
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
  <Footer></Footer>
</template>

<script>
import Navbar from './components/Navbar';
import Notification from './components/Notification';
import Footer from './components/Footer';
export default {
  components: {
    Footer,
    Navbar,
    Notification,
  },
};
</script>
<style>
body {
  font-family: 'Roboto', sans-serif !important;
}
@keyframes fadeInBottom {
  from {
    opacity: 0;
    transform: translateY(2rem);
  }
  to {
    opacity: 1;
  }
}

.load {
  opacity: 0;
  animation: fadeInBottom 0.5s ease-in-out forwards;
}
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

.xkb:hover::after,
.xkb3::after {
  width: 100%;
}
</style>
