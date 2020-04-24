<template>
   <div>
      <my-header/>
      <ninjas v-bind:ninjas="ninjas"/>
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
            ninjas: [
               {name: "Ryu", speciality: "Vue components", show: false},
               {name: "Crystal", speciality: "HTML Wizardry", show: false},
               {name: "Hitoshi", speciality: "Click events", show: false},
               {name: "Tango", speciality: "Conditionals", show: false},
               {name: "Kamy", speciality: "Webpack", show: false},
               {name: "Yoshi", speciality: "Laravel 5.8", show: false}
            ]
         }
      },
      components: {
         "my-header": Header,
         "my-footer": Footer,
         "ninjas": Ninjas
      }
   }
</script>
