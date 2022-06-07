<script default>
export default {
  props: ["items"],
  computed: {
    sumOfPrice() {
      var total = 0;
      this.items.forEach((element) => {
        total = total + parseFloat(element.price);
      });
      return total
    }
  },
  methods: {
    itemDelete(index){
      this.$emit("itemDeleted",index)
    }
  },  
};
</script>

<template>
  <div class="cart">
    <div
      class="p-6 space-y-4 divide-y sm:w-96 sm:p-10 divide-gray-700 dark:bg-gray-900 dark:text-gray-100"
    >
      <h2 class="text-2xl font-semibold">Order items</h2>
      <ul
        v-for="(item, index) in items"
        :key="index"
        class="flex flex-col pt-4 space-y-2"
      >
        <li class="flex items-start justify-between">
          <h3>
            {{ item.name }}
            <span class="text-sm dark:text-violet-400 mr-3">x3</span><button @click="itemDelete(index)" class="text-bold font-bold text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3  text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">-</button>
          </h3>
          <div class="text-right">
            <span class="block">$ {{ item.price }}</span>
            <!-- <span class="text-sm dark:text-gray-400">à $2.50</span> -->
          </div>
        </li>
      </ul>
      <div class="space-y-6">
        <div class="flex justify-between">
          <span>Total</span>
          <span class="font-semibold">${{ sumOfPrice }}</span>
        </div>
        <button
          type="button"
          class="w-full py-2 font-semibold border rounded dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400"
        >
          Go to checkout
        </button>
      </div>
    </div>
  </div>
</template>
<style></style>
