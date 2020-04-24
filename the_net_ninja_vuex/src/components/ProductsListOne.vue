
<template>
   <div id="products-list-one">
      <h2>Products List One</h2>
      <ul>
         <li v-for="product in products" :key="product.name">
            <span class="name">{{ product.name }}</span>&nbsp;
            <span class="price"><strong>${{ product.price }}</strong></span>
         </li>
      </ul>
      <button v-on:click="reducePrice">Reduce price</button>
   </div>
</template>

<script>
   export default {
      computed: {
         products(){
            return this.$store.state.products;
         }
      },
      methods: {
         reducePrice(){
            this.$store.dispatch("reducePrice");
            //this.$store.commit("reducePrice");
         }
      }
   }
</script>

<style scoped>

   #products-list-one{
      background: #FFF8B1;
      box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
      margin-bottom: 30px;
      padding: 10px 20px;
   }

   #products-list-one ul{
      padding: 0;
   }

   #products-list-one li{
      /*display: inline-block;*/
      margin-right: 10px;
      margin-top: 10px;
      padding: 20px;
      background: rgba(255,255,255,0.7);
   }

   .price{
      font-weight: bold;
      color: #E8800C;
   }
   
</style>
