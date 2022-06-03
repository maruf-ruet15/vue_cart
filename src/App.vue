<script default>
import cart from "./components/cart.vue";
import products from "./components/producs.vue";
import navbar from "./components/navbar.vue";
import data from "./data.js";
import Producs from './components/producs.vue';

export default {
  components: {
    cart,
    products,
    navbar,
    Producs,
  },
  data(){
    return{
      items : []
    }
  },
  mounted() {
    // console.log(data)
    this.items = data
  },
};
</script>

<template>
  <div id="app container mx-auto">
    <div>
      <navbar></navbar>
      
    </div>
    <section class="container">
      <div class="container flex mx-auto mt-5">
        <producs :items = "items"></producs>
        <cart></cart>
        
      </div>
    </section>
  </div>
</template>

<style></style>
