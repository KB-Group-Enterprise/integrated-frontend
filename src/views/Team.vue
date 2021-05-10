<template>
  <div class="min-h-content py-5">
    <h1 class="text-center mb-5 font-bold text-3xl">Team</h1>
    <div class="flex justify-center w-full">
      <div
        class="flex flex-col lg:flex-row lg:flex-wrap items-center lg:justify-center lg:items-start bg-white p-0 md:p-5 lg:p-10"
      >
        <div
          v-for="member in members"
          :key="member.name"
          class="fadeIn border border-gray-200 bg-white my-5 p-3 lg:p-5 w-10/12 md:w-5/12 lg:w-1/4 lg:mx-5 2xl:w-1/5"
          :class="member.class"
        >
          <img
            :src="member.img"
            :alt="member.name"
            class="h-72 object-cover w-full lg:h-64 xl:h-80 img-animate"
          />
          <div class="p-5">
            <p class="text-center mt-5 mb-2 font-black">
              {{ member.name.toUpperCase() }}
            </p>
            <p
              class="text-center my-2 font-bold text-2xl"
              style="font-family: 'Courier New' !important"
            >
              {{ member.start }}
            </p>
            <div class="flex flex-col xl:flex-row justify-center">
              <div
                class="fade-items border-2 font-bold border-black p-2 mx-1 my-1"
                v-for="res in member.responsibilities"
                :key="res"
              >
                {{ res }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      members: [
        {
          name: 'Prakit Wongnuntananon',
          id: 62130500051,
          start: 62130500000,
          responsibility: 'Frontend, Devops, Network',
          responsibilities: ['Frontend', 'Devops', 'Network'],
          class: 'pungpee-narak',
          img: require('../assets/boat.png'),
        },
        {
          name: 'Ruangrit Kaewkrom',
          id: 62130500077,
          start: 62130500000,
          responsibility: 'Frontend, Backend, Database',
          responsibilities: ['Frontend', 'Backend', 'Database'],
          class: 'ruang',
          img: require('../assets/ruang.jpg'),
        },
        {
          name: 'Sapondanai Jamon',
          id: 62130500116,
          start: 62130500000,
          responsibility: 'Frontend, Database',
          responsibilities: ['Frontend', 'Database'],
          class: 'beng',
          img: require('../assets/kongbeng.jpg'),
        },
      ],
    };
  },
  mounted() {
    this.incrementAll();
  },
  methods: {
    incrementAll() {
      for (const member of this.members) {
        this.incrementEffect(member);
      }
    },
    incrementEffect(member) {
      // while (member.start <= member.id) {
      const interval = setInterval(() => {
        member.start += 1;
        if (member.start >= member.id) {
          clearInterval(interval);
        }
      }, 20);
      // }
    },
  },
};
</script>

<style lang="css">
@keyframes fadeInBottom {
  from {
    opacity: 0;
    transform: translateY(2rem);
  }
  to {
    opacity: 1;
  }
}
@keyframes toColor {
  from {
    filter: blur(0.5rem);
    transform: scale(0.9, 0.9);
  }
  to {
    filter: blur(0);
    transform: scale(1, 1);
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.img-animate {
  filter: blur(0.5rem);
  transform: scale(0.9, 0.9);
  animation: toColor 1s forwards;
  animation-delay: 2s;
}
.fade-items {
  opacity: 0;
  animation: fadeIn 1s forwards;
  animation-delay: 2s;
}
.fadeIn {
  opacity: 0;
  animation: fadeInBottom 1s forwards;
}

.pungpee-narak {
  animation-delay: 0s;
}

.ruang {
  animation-delay: 0.5s;
}

.beng {
  animation-delay: 1s;
}
</style>
