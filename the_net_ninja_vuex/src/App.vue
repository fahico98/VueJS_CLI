
<template>
   <div id="app">
      <products-list-one></products-list-one>
      <products-list-two></products-list-two>
   </div>
</template>

<script>

   import ProductsListOne from "./components/ProductsListOne";
   import ProductsListTwo from "./components/ProductsListTwo";

   export default {
      name: "app",
      data(){
         return {
            
         }
      },
      components: {
         "products-list-one": ProductsListOne,
         "products-list-two": ProductsListTwo
      }
   }
</script>
