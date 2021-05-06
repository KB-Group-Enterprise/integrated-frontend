<template lang="html">
  <div
    class="shadow p-3 m-2 font-bold text-white text-center rounded-2xl notification flex flex-col items-center"
    :class="[isOn ? 'on' : 'off', color[type]]"
  >
    <img
      v-if="type === 'success'"
      class="object-cover rounded-full"
      src="https://user-images.githubusercontent.com/12693087/31615154-9c8c4886-b280-11e7-828d-2f64e4250c53.gif"
    />
    <img
      v-else
      class="object-cover rounded-full"
      src="https://cdn.dribbble.com/users/2469324/screenshots/6538803/comp_3.gif"
    />
    {{ msg }}
  </div>
</template>
<script>
export default {
  props: {
    msg: {
      type: String,
      default: 'this is a toast',
    },
    isOn: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'success',
    },
  },
  data() {
    return {
      color: {
        success: 'bg-green-500',
        error: 'bg-red-500',
      },
    };
  },
};
</script>
<style scoped>
img {
  width: 100px;
  height: 100px;
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
@keyframes fadeOutBottom {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translateY(2rem);
  }
}
.notification {
  min-width: 15rem;
  position: fixed;
  bottom: 2rem;
}
.on {
  animation: bounce-in 1s;
}
.off {
  animation: bounce-out 1s forwards;
}

@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.95);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
  100% {
    opacity: 0;
    transform: scale(0.3);
  }
}
</style>
