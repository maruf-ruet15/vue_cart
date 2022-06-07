<script default>
import cart from "./components/cart.vue";
import products from "./components/views/products.vue";
import navbar from "./components/navbar.vue";
import data from "./data.js";
// import Producs from "./components/views/products.vue";

export default {
  components: {
    cart,
    products,
    navbar,
    // Producs,
  },
  data() {
    return {
      items: [],
      cart: [],
    };
  },
  mounted() {
    // console.log(data)
    this.items = data;
  },
  methods: {
    search(keyword) {
      this.items = data.filter((item) => {
        return item.name.toLowerCase().indexOf(keyword.toLowerCase()) != -1;
      });
    },
    addCartItem(item) {
      this.cart.push(item);
    },
    deleteCartItem(index) {
      this.cart.splice(index, 1);
    },
  },
};
</script>

<template>

  <div id="app mx-auto" class="bg-gray-900">

    <div>
      <navbar @search="search"></navbar>
    </div>

    <div class="flex container br-5">
      <div class="w-3/4 mx-auto mt-5 mb-5 mr-5">
        <router-view
          class=""
          @newItemAdded="addCartItem"
          :items="items"
        ></router-view>
      </div>

      <div class="w-1/4 m-6 container">
        <cart
          class=""
          @itemDeleted="deleteCartItem"
          :items="cart"
        ></cart>
      </div>
    </div>
  </div>
  
</template>

<style></style>
