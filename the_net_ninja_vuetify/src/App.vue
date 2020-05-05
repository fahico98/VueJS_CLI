
<template>
   <v-app>
      <main-navbar/>
      <v-content class="blue-grey lighten-5">
         <v-container>
            <router-view></router-view>
         </v-container>
      </v-content>
   </v-app>
</template>

<script>

   import MainNavbar from "./components/MainNavbar";

   export default {
      name: 'App',
      components: {
         MainNavbar
      },
      data(){
         return {
            temp: true
         }
      },
   };

</script>
