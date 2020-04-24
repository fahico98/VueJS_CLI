
<template>
   <div id="ninjas">
      <h1>Ninjas list !</h1>
      <ul>
         <li v-bind:key="ninja.name" v-for="ninja in ninjas" v-on:click="ninja.show = !ninja.show">
            <h2>{{ ninja.name }}</h2>
            <h5 v-show="ninja.show">{{ ninja.speciality }}</h5>
         </li>
      </ul>
   </div>
</template>

<script>
   export default {
      data(){
         return {
            ninjas: [
               {name: "Ryu", speciality: "Vue components", show: false},
               {name: "Crystal", speciality: "HTML Wizardry", show: false},
               {name: "Hitoshi", speciality: "Click events", show: false},
               {name: "Tango", speciality: "Conditionals", show: false},
               {name: "Kamy", speciality: "Webpack", show: false},
               {name: "Yoshi", speciality: "Laravel 5.8", show: false}
            ]
         };
      }
   }
</script>

<style scoped>
   div #ninjas{
      background: lightgray;
      padding: 10px;
   }
   h1{
      text-align: center;
   }
   li{
      cursor: pointer;
   }
   h5{
      color: red;
   }
</style>
