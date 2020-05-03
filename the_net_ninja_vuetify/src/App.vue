
<template>
   <v-app>
      <v-content class="blue-grey lighten-5">
         <main-navbar/>
         <router-view></router-view>
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
      data: () => ({
         //
      }),
   };

</script>
