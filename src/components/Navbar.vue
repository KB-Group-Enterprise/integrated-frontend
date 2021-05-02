<template>
  <div
    v-if="isShow"
    class="bg-primary h-screen w-full absolute flex flex-col z-50 items-center justify-center text-lg lg:hidden"
    :class="animationClass"
  >
    <div @click="closeNavbar" class="w-8 absolute right-5 top-5">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="times"
        class="svg-inline--fa fa-times fa-w-11"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 352 512"
      >
        <path
          fill="currentColor"
          d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
        ></path>
      </svg>
    </div>
    <router-link @click="closeNavbar" to="/">Home</router-link>
    <router-link @click="closeNavbar" to="/team">Team</router-link>
    <router-link @click="closeNavbar" to="/add">Add</router-link>
    <router-link @click="closeNavbar" to="/update">Update</router-link>
  </div>
  <div class="h-navbar flex w-full items-center bg-secondary fixed z-40">
    <div
      @click="openNavbar"
      class="w-9 h-auto flex flex-col p-1 absolute right-5 lg:hidden"
    >
      <div class="h-1 bg-black rounded-xl"></div>
      <div class="h-1 my-2 bg-black rounded-xl"></div>
      <div class="h-1 bg-black rounded-xl"></div>
    </div>
    <div class="h-navbar hidden items-center justify-around lg:flex w-1/5">
      <router-link @click="closeNavbar" to="/">Home</router-link>
      <router-link @click="closeNavbar" to="/team">Team</router-link>
      <router-link @click="closeNavbar" to="/add">Add</router-link>
      <router-link @click="closeNavbar" to="/update">Update</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-bar',
  data() {
    return {
      isShow: false,
      animationClass: '',
    };
  },
  methods: {
    openNavbar() {
      this.isShow = true;
      this.animationClass = 'animate-slideOpen';
      document.body.style.overflow = 'hidden';
    },
    closeNavbar() {
      this.animationClass = 'animate-slideClose';
      document.body.style.overflow = 'auto';
      setTimeout(() => (this.isShow = false), 650);
    },
  },
};
</script>
