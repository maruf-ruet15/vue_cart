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
  }
};
</script>

<template>
  <div class="cart w-1/4 ml-3">
    <div
      class="container flex flex-col max-w-md p-6 space-y-4 divide-y sm:w-96 sm:p-10 divide-gray-700 dark:bg-gray-900 dark:text-gray-100"
    >
      <h2 class="text-2xl font-semibold">Order items</h2>
      <ul
        v-for="(item, index) in items"
        :key="index"
        class="flex flex-col pt-4 space-y-2"
      >
        <li class="flex items-start justify-between">
          <h3>
            {{ item.title }}
            <span class="text-sm dark:text-violet-400">x3</span>
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
      <!-- <div class="pt-4 space-y-2">
              <div>
                <div class="flex justify-between">
                  <span>Subtotal</span>
                  <span>$21.50</span>
                </div>
              </div>
              <div class="flex justify-between">
                <span>Discount</span>
                <span>-$4.30</span>
              </div>
            </div>
            <div class="pt-4 space-y-2">
              <div class="flex justify-between">
                <span>Service fee</span>
                <span>$0.50</span>
              </div>
              <div class="flex flex-col">
                <div class="flex justify-between">
                  <span>Delivery fee</span>
                  <span>$4.00</span>
                </div>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  class="text-xs hover:underline dark:text-violet-400"
                  >How do our fees work?</a
                >
              </div> -->
      
      <!-- </div> -->
    </div>
  </div>
</template>
<style></style>
