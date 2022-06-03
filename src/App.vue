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
      items : [],
      cart : []
    }
  },
  mounted() {
    // console.log(data)
    this.items = data
  },
  methods: {
    addCartItem(item){
      this.cart.push(item)
    }
  }
};
</script>

<template>
  <div id="app container mx-auto" class="bg-gray-900">
    <div>
      <navbar></navbar>
      
    </div>
    <section class="container">
      <div class="container flex mx-auto mt-5"> 
        <producs @newItemAdded="addCartItem" :items = "items"></producs>
        <cart :items ="cart"></cart>
        
      </div>
    </section>
  </div>
</template>

<style></style>
