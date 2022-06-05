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
    search(keyword){
     this.items = data.filter(item =>{
        return item.title.toLowerCase().indexOf(keyword.toLowerCase()) != -1
      })
    },
    addCartItem(item){
      this.cart.push(item)
    },
    deleteCartItem(index){
      this.cart.splice(index,1)
    }
  }
};
</script>

<template>
  <div id="app container mx-auto" class="bg-gray-900">
    <div>
      <navbar @search="search" ></navbar>
      
    </div>
    <section class="container">
      <div class="container flex mx-auto mt-5"> 
        <producs @newItemAdded="addCartItem" :items = "items"></producs>
        <cart @itemDeleted="deleteCartItem" :items ="cart"></cart>
        
      </div>
    </section>
  </div>
</template>

<style></style>
