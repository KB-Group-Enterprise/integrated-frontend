<template>
  <div class="min-h-content py-5">
    <h1 class="text-center mb-5 font-bold text-3xl">Team</h1>
    <div class="flex justify-center w-full">
      <div
        class="flex flex-col lg:flex-row lg:flex-wrap items-center lg:justify-center lg:items-start"
      >
        <div
          v-for="member in members"
          :key="member.name"
          class="shadow-lg bg-white my-5 p-5 w-6/12 md:w-5/12 lg:w-1/4 lg:mx-5 2xl:w-1/5"
        >
          <img
            :src="member.img"
            :alt="member.name"
            class="h-72 object-cover w-full lg:h-64 xl:h-80"
          />
          <p class="text-center my-2 font-bold">{{ member.name }}</p>
          <p class="text-center my-2 font-bold">{{ member.id }}</p>
          <p class="text-center my-2">{{ member.responsibility }}</p>
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
          id: '62130500051',
          responsibility: 'Frontend, Devops, Network',
          img: require('../assets/boat.png'),
        },
        {
          name: 'Ruangrit Kaewkrom',
          id: '62130500077',
          responsibility: 'Frontend, Backend, Database',
          img: require('../assets/ruang.jpg'),
        },
        {
          name: 'Sapondanai Jamon',
          id: '62130500116',
          responsibility: 'Frontend, Database',
          img: require('../assets/kongbeng.jpg'),
        },
      ],
    };
  },
};
</script>

<style></style>
