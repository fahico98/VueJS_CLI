
<template>
   <header>
      <h1>
         {{ title }}
      </h1>
   </header>
</template>

<script>
   export default {
      data(){
         return {
            title: "Hello from the Header...!"
         };
      }
   }
</script>

<style scoped>
   header{
      background: lightgreen;
      padding: 10px;
   }
   h1{
      color: green;
      text-align: center;
   }
</style>
