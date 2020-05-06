
<template>

   <div>

      <v-navigation-drawer app v-model="drawer" class="teal">
         <v-row>
            <v-col class="mt-5 text-center">
               <v-avatar size="75"><img src="/avatar-1.png"></v-avatar>
               <p class="mt-1 subheading white--text">Fahico</p>
            </v-col>
         </v-row>
         <v-row class="text-center mb-4">
            <v-col><popup/></v-col>
         </v-row>
         <v-list>
            <v-list-item v-for="link in links" :key="link.text" router-link v-bind:to="link.route">
               <v-list-item-icon><v-icon color="white">{{ link.icon }}</v-icon></v-list-item-icon>
               <v-list-item-content>
                  <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
               </v-list-item-content>
            </v-list-item>
         </v-list>
      </v-navigation-drawer>

      <v-app-bar app flat>

         <v-app-bar-nav-icon class="teal--text" v-on:click="drawer = !drawer"></v-app-bar-nav-icon>
         <v-toolbar-title class="teal--text">
            <span class="text-uppercase font-weight-bold">Todo</span>
            <span class="text-capitalize font-weight-light">Fahico</span>
         </v-toolbar-title>

         <v-spacer></v-spacer>

         <v-menu offset-y>
            <template v-slot:activator="{ on }">
               <v-btn depressed text class="text-capitalize teal--text" v-on="on">
                  <span>Menu</span>
                  <v-icon right>mdi-chevron-down</v-icon>
               </v-btn>
            </template>
            <v-list dense>
               <v-list-item v-for="link in links" :key="link.text" router-link v-bind:to="link.route">
                  <!--<v-list-item-icon><v-icon>{{ link.icon }}</v-icon></v-list-item-icon>-->
                  <v-list-item-content>
                     <v-list-item-title>
                        <span class="text-capitalize">{{ link.text }}</span>
                     </v-list-item-title>
                  </v-list-item-content>
               </v-list-item>
            </v-list>
         </v-menu>

         <v-btn depressed text class="text-capitalize teal--text ml-2">
            <span>Sign Out</span>
            <v-icon right>mdi-exit-to-app</v-icon>
         </v-btn>

      </v-app-bar>

   </div>

</template>

<script>

   import Popup from "./Popup";

   export default {
      name: "main-navbar",
      components: { Popup },
      data(){
         return {
            drawer: false,
            links: [
               {icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/'},
               {icon: 'mdi-folder', text: 'My Projects', route: '/projects'},
               {icon: 'mdi-account-group', text: 'Team', route: '/team'}
            ]
         };
      }
   }

</script>
