
<template>
   
   <v-toolbar flat>
      <v-toolbar-title class="blue-grey--text">
         <span class="text-uppercase font-weight-bold">Todo</span>
         <span class="text-capitalize font-weight-light">Fahico</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn depressed text class="text-capitalize blue-grey--text">
         <span>Sign Out</span>
         <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
   </v-toolbar>

</template>

<script>

   export default {
      name: "main-navbar"
   }

</script>
