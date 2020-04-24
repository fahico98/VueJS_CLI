
<template>
   <div>
      <h2>{{ title }}</h2>
      <ninjas></ninjas>
   </div>
</template>

<script>

   import Ninjas from './Ninjas.vue';

   export default {
      data(){
         return{
            title: "Net Ninja App...!"
         };
      },
      components: {
         // Local component element...!
         ninjas: Ninjas
      }
   }

</script>

<style scoped>
   h2{
      color: purple;
   }
</style>
