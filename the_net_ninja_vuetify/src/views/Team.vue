

<template>

   <div class="projects">
      <v-container class="my-12 px-0">
      <h2 class="mb-10">Team</h2>
         
         <v-row>
            <v-col cols="12" sm="6" md="4" lg="3" v-for="person in team" :key="person.name">
               <v-card class="text-center" tile outlined>
                  <v-responsive class="pt-4">
                     <v-avatar size="100" class="teal lighten-3">
                        <img :src="person.avatar">
                     </v-avatar>
                  </v-responsive>
                  <v-card-text>
                     <div class="teal--text">{{ person.name }}</div>
                     <div class="grey--text">{{ person.role }}</div>
                  </v-card-text>
                  <v-card-actions>
                     <v-btn text color="teal">
                        <v-icon small left>mdi-message-text-outline</v-icon>
                        <span class="caption text-capitalize">message</span>
                     </v-btn>
                  </v-card-actions>
               </v-card>
            </v-col>
         </v-row>

      </v-container>
   </div>

</template>

<script>

   export default {
      name: "team",
      data(){
         return{
            team: [
               {name: 'The Net Ninja', role: 'Web developer', avatar: "/avatar-1.png"},
               {name: 'Ryu', role: 'Graphic designer', avatar: "/avatar-2.png"},
               {name: 'Chun Li', role: 'Web developer', avatar: "/avatar-3.png"},
               {name: 'Gouken', role: 'Social media maverick', avatar: "/avatar-4.png"},
               {name: 'Yoshi', role: 'Sales guru', avatar: "/avatar-5.png"}
            ]
         };
      }
   }

</script>