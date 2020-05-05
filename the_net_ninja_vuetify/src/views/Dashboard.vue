
<template>

   <div class="dashboard">
      <v-container class="my-12 px-0">
      <h2 class="mb-10">Dashboard</h2>

         <v-row class="mb-4 ml-2">

            <v-tooltip top>
               <template  v-slot:activator="{ on }">   
                  <v-btn small text color="teal" v-on:click.prevent="sortBy('title')" v-on="on">
                     <v-icon left small>mdi-folder</v-icon>
                     <span class="caption text-lowercase">By project name</span>
                  </v-btn>
               </template>
               <span>Sort projects by project name</span>
            </v-tooltip>

            <v-tooltip top>
               <template  v-slot:activator="{ on }">  
                  <v-btn small text color="teal" v-on:click.prevent="sortBy('person')" v-on="on" class="ml-2">
                     <v-icon left small>mdi-account</v-icon>
                     <span class="caption text-lowercase">By person</span>
                  </v-btn>
               </template>
               <span>Sort projects by person name</span>
            </v-tooltip>
         </v-row>

         <v-card tile outlined>
            <v-row class="ma-0">
               <v-col cols="12" sm="6">
                  <div class="body-1 teal--text">Project title</div>
               </v-col>
               <v-col cols="4" sm="2">
                  <div class="body-1 teal--text">Person</div>
               </v-col>
               <v-col cols="4" sm="2">
                  <div class="body-1 teal--text">Due by</div>
               </v-col>
               <v-col cols="4" sm="2">
                  <div class="body-1 teal--text">Status</div>
               </v-col>
            </v-row>
         </v-card>

         <v-card tile outlined v-for="project in projects" :key="project.title">
            <v-row class="ma-0" :class="`project ${project.status}`">
               <v-col cols="12" sm="6">
                  <div class="caption teal--text">Project title</div>
                  <div class="body-1">{{ project.title }}</div>
               </v-col>
               <v-col cols="4" sm="2">
                  <div class="caption teal--text">Person</div>
                  <div class="body-1">{{ project.person }}</div>
               </v-col>
               <v-col cols="4" sm="2">
                  <div class="caption teal--text">Due by</div>
                  <div class="body-1">{{ project.due }}</div>
               </v-col>
               <v-col cols="4" sm="2">
                  <div class="text-center">
                     <v-chip small :class="`${ project.status } caption my-2`">{{ project.status }}</v-chip>
                  </div>
               </v-col>
            </v-row>
         </v-card>
      </v-container>
   </div>

</template>

<script>
   export default {
      name: 'dashboard',
      data(){
         return {
            projects: [
               {
                  title: 'Design a new website',
                  person: 'The Net Ninja',
                  due: '1st Jan 2019',
                  status: 'ongoing',
                  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum ' +
                     'minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates ' +
                     'porro molestias non sequi animi!'
               },
               {
                  title: 'Code up the homepage',
                  person: 'Chun Li',
                  due: '10th Jan 2019',
                  status: 'complete',
                  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum ' +
                     'minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates ' +
                     'porro molestias non sequi animi!'
               },
               {
                  title: 'Design video thumbnails',
                  person: 'Ryu',
                  due: '20th Dec 2018',
                  status: 'complete',
                  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum ' +
                     'minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates ' +
                     'porro molestias non sequi animi!'
               },
               {
                  title: 'Create a community forum',
                  person: 'Gouken',
                  due: '20th Oct 2018',
                  status: 'overdue',
                  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum ' +
                     'minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates ' +
                     'porro molestias non sequi animi!'
               },
            ]
         };
      },
      methods: {
         sortBy(prop){
            this.projects.sort((a, b) => (a[prop] < b[prop]) ? -1 : 1);
         }
      }
   }
</script>

<style scoped>

   .project.complete{
      border-left: 4px solid lightgreen;
   }

   .project.ongoing{
      border-left: 4px solid #FFCB7A;
   }

   .project.overdue{
      border-left: 4px solid lightcoral;
   }

   .v-chip.complete{
      background: lightgreen !important;
   }

   .v-chip.ongoing{
      background: #FFCB7A !important;
   }

   .v-chip.overdue{
      background: lightcoral !important;
   }

</style>
