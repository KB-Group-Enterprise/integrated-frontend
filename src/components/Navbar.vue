<template>
  <div
    v-if="isShow"
    class="bg-secondary h-screen w-full fixed flex flex-col z-50 items-center justify-center text-lg lg:hidden"
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
    <div
      class="flex flex-col justify-between items-center h-1/3 font-bold text-2xl"
    >
      <router-link
        @click="
          closeNavbar();
          $store.dispatch('changeDynamicComponent', 'brands');
        "
        to="/"
        >Home</router-link
      >
      <router-link @click="closeNavbar" to="/team">Team</router-link>
      <router-link @click="closeNavbar" to="/add">Add</router-link>
    </div>
  </div>
  <div
    class="transition-all duration-150 ease-in-out flex w-full items-center bg-secondary fixed z-40"
    :class="[isScrolled ? 'h-16' : 'h-navbar']"
  >
    <div
      @click="openNavbar"
      class="w-9 h-auto flex flex-col p-1 absolute right-5 lg:hidden"
    >
      <div class="h-1 bg-black rounded-xl"></div>
      <div class="h-1 my-2 bg-black rounded-xl"></div>
      <div class="h-1 bg-black rounded-xl"></div>
    </div>
    <div class="hidden items-center justify-between lg:flex w-full">
      <router-link
        class="mx-3 px-2 text-xl"
        @click="closeNavbar"
        to="/"
        style="font-family: 'Righteous', cursive"
        ><div class="flex flex-col text-center">
          <div class="flex flex-row">
            <div class="g">G</div>
            <div class="fadeIn"><div class="andi">ANDI</div></div>
          </div>
          <div class="fadeIn road"><div>ROAD</div></div>
        </div>
      </router-link>
      <div class="w-1/5 flex justify-around mx-5">
        <router-link
          @click="
            closeNavbar();
            $store.dispatch('changeDynamicComponent', 'brands');
          "
          to="/"
          >Home</router-link
        >
        <router-link @click="closeNavbar" to="/team">Team</router-link>
        <router-link @click="closeNavbar" to="/add">Add</router-link>
        <router-link @click="closeNavbar" to="/test/list">TestList</router-link>
      </div>
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
      isScrolled: false,
    };
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 150) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    },
    openNavbar() {
      document.body.style.overflow = 'hidden';
      this.isShow = true;
      this.animationClass = 'animate-slideOpen';
    },
    closeNavbar() {
      this.animationClass = 'animate-slideClose';
      document.body.style.overflow = 'auto';
      setTimeout(() => (this.isShow = false), 650);
    },
  },
};
</script>
<style>
.fadeIn {
  opacity: 0;
  animation-delay: 5s;
  animation: fadeInBottom 1s forwards;
}
.g {
  animation-delay: 0s;
  animation: gandiGetStronger 2s forwards;
}
.andi {
  /* opacity: 0; */
  animation-delay: 1s;
}
.road {
  /* opacity: 0; */
  animation-delay: 2s;
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
@keyframes gandiGetStronger {
  0% {
    transform: scale(4) translateX(0.5rem) translateY(0.2rem);
  }
  30% {
    transform: scale(4) translateX(0.5rem) translateY(0.2rem);
  }
  100% {
    transform: scale(1);
  }
}
</style>
