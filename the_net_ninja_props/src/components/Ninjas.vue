
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
      props: ["ninjas"],
      data(){
         return {

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
