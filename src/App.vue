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
        return item.title.toLowerCase().indexOf(keyword.toLowerCase()) != -1;
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
  <div id="app container mx-auto" class="bg-gray-900">

    <!-- <router-link :to="{ path: '/about/1' }">About 1</router-link>
    <router-link :to="{ path: '/about/2' }">About 2</router-link>
    <router-link :to="{ path: '/about/3' }">About 3</router-link>
    <router-link :to="{ path: '/service' }">service</router-link> -->
    <!-- <router-view></router-view> -->

    <div>
      <navbar @search="search"></navbar>
    </div>
    <section class="">
      <div class="container flex mx-auto mt-5">
        <div class="w-3/4">
          <!-- <producs class="w-7/8" @newItemAdded="addCartItem" :items="items"></producs> -->
        <router-view></router-view>
        </div>
        <div>
          <cart class="w-1/8" @itemDeleted="deleteCartItem" :items="cart"></cart>
        </div>
        
      </div>
    </section>
  </div>
</template>

<style></style>
