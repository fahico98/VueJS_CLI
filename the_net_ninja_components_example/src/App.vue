<template>
   <div>
      <my-header/>
      <ninjas/>
      <my-footer/>
   </div>
</template>

<script>

   import Header from "./components/Header";
   import Footer from "./components/Footer";
   import Ninjas from "./components/Ninjas";

   export default {
      data () {
         return {

         }
      },
      components: {
         "my-header": Header,
         "my-footer": Footer,
         "ninjas": Ninjas
      }
   }
</script>

