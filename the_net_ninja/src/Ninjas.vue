
<template>
   <div>
      <h2>Hello from Ninjas.vue file...!</h2>
      <ul>
         <li v-bind:key="ninja" v-for="ninja in ninjas">{{ ninja }}</li>
      </ul>
   </div>
</template>

<script>

   export default {
      data(){
         return{
            ninjas: ["Ryu", "Ken", "Akuma", "Kyo"]
         };
      }
   }

</script>

<style scoped>
   h2{
      color: orangered;
   }
</style>
