
<template>
   <div id="products-list-two">
      <h2>Products List Two</h2>
      <ul>
         <li v-for="product in saleProducts" :key="product.name">
            <span class="name">{{ product.name }}</span>
            &nbsp;
            <span class="price"><strong>${{ product.price }}</strong></span>
         </li>
      </ul>
   </div>
</template>

<script>
   export default {
      computed: {
         products(){
            return this.$store.state.products;
         },
         saleProducts(){
            return this.$store.getters.saleProducts;
         }
      }
   }
</script>

<style scoped>

   #products-list-two{
      background: #D1E4FF;
      box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
      margin-bottom: 30px;
      padding: 10px 20px;
   }

   #products-list-two ul{
      padding: 0;
      /*list-style-type: none;*/
   }

   #products-list-two li{
      margin-right: 10px;
      margin-top: 10px;
      padding: 20px;
      background: rgba(255,255,255,0.7);
   }

   .price{
      font-weight: bold;
      color: #160CE8;
      /*display: block;*/
   }

</style>
