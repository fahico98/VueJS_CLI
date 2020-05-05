
<template>

   <div class="projects">
      <v-container class="my-12 px-0">
      <h2 class="mb-10">Projects</h2>

         <v-row>
            <v-col>
               <v-expansion-panels tile hover accordion class="elevation-0">
                  <v-expansion-panel v-for="project in myProjects" :key="project.title">
                     <v-expansion-panel-header>{{ project.title }}</v-expansion-panel-header>
                     <v-expansion-panel-content>
                        <div class="body-1 mt-4">{{ project.content }}</div>
                        <div class="caption teal--text">Due by <strong>{{ project.due }}</strong></div>
                     </v-expansion-panel-content>
                  </v-expansion-panel>
               </v-expansion-panels>
            </v-col>
         </v-row>

      </v-container>
   </div>

</template>

<script>

   export default {
      name: "projects",
      data(){
         return{
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
               {
                  title: 'Understanding how Vuetify works',
                  person: 'The Net Ninja',
                  due: '1st Mar 2018',
                  status: 'ongoing',
                  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum ' +
                     'minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates ' +
                     'porro molestias non sequi animi!'
               },
            ]
         };
      },
      computed: {
         myProjects(){
            return this.projects.filter(project => {
               return project.person == "The Net Ninja";
            });
         }
      }
   }

</script>