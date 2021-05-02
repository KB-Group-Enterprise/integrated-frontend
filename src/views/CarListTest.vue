<template lang="html">
  <div>
    <table
      class="mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden"
    >
      <thead class="bg-gray-50">
        <tr class="text-gray-600 text-left">
          <th class="font-semibold text-sm uppercase px-6 py-4">Id</th>
          <th class="font-semibold text-sm uppercase px-6 py-4">Name</th>
          <th class="font-semibold text-sm uppercase px-6 py-4">Price</th>
          <th class="font-semibold text-sm uppercase px-6 py-4 text-center">
            Brand
          </th>
          <th class="font-semibold text-sm uppercase px-6 py-4 text-center">
            Cartype
          </th>
          <th
            class="font-semibold text-sm uppercase px-6 py-4 text-center"
          ></th>
          <th
            class="font-semibold text-sm uppercase px-6 py-4 text-center"
          ></th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        <tr v-for="car in list" :key="car">
          <td>{{ car.id }}</td>
          <td>{{ car.name }}</td>
          <td>{{ car.price }}</td>
          <td>{{ car.brand.name }}</td>
          <td>{{ car.cartype.name }}</td>
          <td>
            <button
              class="btn p-2 shadow bg-green-500"
              @click="goToUpdate(car.id)"
            >
              Edit
            </button>
          </td>
          <td>
            <button
              class="btn p-2 shadow bg-red-500"
              @click="deleteCar(car.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const res = await this.getHttp('/api/cars');
      if (res.status === 200) {
        this.list = res.data;
      }
    },
    goToUpdate(id) {
      this.$router.push(`/update/${id}`);
    },
    async deleteCar(id) {
      const res = await this.deleteHttp(`/api/cars/${id}`);
      console.log(res);
      if (res) {
        this.fetchData();
      }
    },
  },
};
</script>
<style lang=""></style>
