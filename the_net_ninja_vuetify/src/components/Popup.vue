
<template>
   <div>
      <v-dialog v-model="dialogForm" max-width="600px">
         <template v-slot:activator="{ on }">
            <v-btn depressed v-on="on" color="white">
               <span class="text-capitalize teal--text">Add new project</span>
            </v-btn>
         </template>
         <v-card>
            <v-card-title>
               <h4 class="teal--text" v-on:click="dialogForm = true">Add a New Project</h4>
            </v-card-title>
            <v-card-text>
               <v-form class="mt-3" ref="form">
                  <v-text-field outlined dense color="teal" label="Title" v-model="title" :rules="inputRules"></v-text-field>
                  <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
                     offset-y min-width="290px" readonly>
                     <template v-slot:activator="{ on }">
                        <v-text-field outlined dense color="teal" label="Due date" v-model="formattedDue" v-on="on"
                           :rules="inputRules" readonly></v-text-field>
                     </template>
                     <v-date-picker color="teal" header-color="teal" v-model="due" @input="menu2 = false">
                        </v-date-picker>
                  </v-menu>
                  <v-textarea no-resize outlined dense rows="4" color="teal" label="Content" v-model="content"
                     :rules="textAreaRules"></v-textarea>
                  <v-btn depressed color="teal white--text" v-on:click="submit" :loading="loading">
                     <span class="text-capitalize">add project</span>
                  </v-btn>
                  <v-btn depressed class="ml-2" color="teal white--text" v-on:click="closeDialog">
                     <span class="text-capitalize">cancel</span>
                  </v-btn>
               </v-form>
            </v-card-text>
         </v-card>
      </v-dialog>
   </div>
</template>

<script>

   import format from 'date-fns/format';
   import parseISO from 'date-fns/parseISO';
   import db from "@/firebase";

   export default {
      name: "popup",
      data(){
         return {
            title: "",
            content: "",
            due: "",
            dialogForm: false,
            menu: false,
            modal: false,
            menu2: false,
            loading: false,
            inputRules: [
               value => value && value.length >= 5 || "Minimum length is 5 characters.",
               value => value && value.length <= 30 || "Maximum length is 30 characters."
            ],
            textAreaRules: [
               value => value && value.length >= 10 || "Minimum length is 10 characters.",
               value => value && value.length <= 180 || "Maximum length is 150 characters."
            ]
         };
      },
      computed: {
         formattedDue: {
            get(){
               return this.due ? format(parseISO(this.due), "d MMM yyyy") : "";
            },
            set(value){
               this.due = value ? format(parseISO(value), "d MMM yyyy") : "";
            }
         }
      },
      methods: {
         submit(){
            if(this.$refs.form.validate()){
               this.loading = true;
               const project = {
                  title: this.title,
                  content: this.content,
                  due: this.due,
                  person: "Fahico",
                  status: "ongoin"
               };
               db.collection("projects").add(project).then(() => {
                  this.loading = false;
                  this.closeDialog();
                  this.$emit("new-project-added");
               });
            }
         },
         closeDialog(){
            this.$refs.form.reset();
            this.dialogForm = false;
         }
      }
   }

</script>
