<script default>
import axios from "axios";
export default {
  data() {
    return {
      item: null,
    };
  },
  mounted() {
    this.fetchItem();
  },
  methods: {
    fetchItem() {
      var self = this;
      axios
        .get(
          "https://ecom-rest-apis.herokuapp.com/api/products/" +
            this.$route.params._id
        )
        .then((response) => {
          self.item = response.data;
          console.log(response);
        });
    },
  },
};
</script>

<template>
  <div v-if="item" class="dark:bg-gray-800 dark:border-gray-700 mb-7">
    <div class="flex m-4 mb-9 p-9">
      <div class="w-2/6">
        <a href="#">
          <img class="p-8 rounded-t-lg" :src="item.image" alt="product image" />
        </a>
      </div>

      <div class="w-4/6 mt-5">
        <h5
          class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
        >
          {{ item.name }}
        </h5>
        <div>
          <div class="flex items-center mt-2.5 mb-5">
            <svg
              class="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
            <span
              class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"
              >5</span
            >
          </div>
        </div>
        <div class="text-gray-300 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora qui
          nisi cumque voluptas hic ex eligendi sit cum aspernatur quam ducimus,
          mollitia sint ipsum consectetur id asperiores perspiciatis atque
          maxime perferendis ad? Fugiat eos nihil in quaerat. Quae eum vero iure
          maxime nostrum porro debitis odit explicabo qui perspiciatis?
          Voluptate atque aliquid voluptatibus corrupti quas placeat dolore fuga
          eius ratione eum sunt id eaque, provident voluptates!
        </div>
        <div>
          <div
            class="text-3xl font-bold text-gray-900 dark:text-white ml-2 mb-5"
          >
            $ {{ item.price }}
          </div>
        </div>
        <div>
          <a
            href="#"
            @click="addToCart(item)"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >Add to cart</a
          >
        </div>
      </div>
    </div>
  </div>
  <h3 v-else> Loading...</h3>
</template>

<style></style>
