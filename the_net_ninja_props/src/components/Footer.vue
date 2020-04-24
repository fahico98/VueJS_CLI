
<template>
   <footer>
      <h2>
         {{ title }}
      </h2>
   </footer>
</template>

<script>
   export default {
      data(){
         return {
            title: "Hello from the Footer...!"
         };
      }
   }
</script>

<style scoped>
   footer{
      background: lightskyblue;
      padding: 10px;
   }
   h2{
      color: navy;
      text-align: center;
   }
</style>
