<template>
  <Navbar></Navbar>
  <div class="relative position-content bg-primary py-5">
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar';
export default {
  components: {
    Navbar,
  },
};
</script>
