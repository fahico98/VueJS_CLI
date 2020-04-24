<template>
   <div class="home page">
      <h1>Home page</h1>
      <p>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate obcaecati nostrum magni adipisci 
         autem consequatur dolorum accusamus maiores numquam eum delectus libero assumenda placeat aliquid 
         voluptatem. Consequuntur, odio quia saepe accusantium a amet id ea facere ducimus laboriosam? Quos, harum?
      </p>
      <button id="showVueLogoButton" v-on:click="showVueLogo = !showVueLogo">Animate Vue logo !</button>
      <transition name="vue-logo">
         <div class="vue-logo-container" v-show="showVueLogo">
            <img src="./../assets/logo.png" alt="Vue logo" width="120px">
         </div>
      </transition>
   </div>
</template>

<script>
   export default {
      name: 'Home',
      data(){
         return {
            showVueLogo: false
         };
      }
   }
</script>

<style scoped>

   #showVueLogoButton {
      display: block;
      margin: 20px auto;
   }

   .vue-logo-enter-active, .vue-logo-leave-active {
      transition: transform 0.3s ease-in-out, opacity 0.3s ease;
   }

   .vue-logo-enter { /* Enter from */
      transform: translateY(80px) rotateZ(360deg);
      opacity: 0;
   }

   .vue-logo-leave-to { /* Leave to */
      transform: translateY(80px) rotateZ(-360deg);
      opacity: 0;
   }

   .vue-logo-enter-to, .vue-logo-leave { /* Enter to and Leave from */
      transform: translateY(0px) rotateZ(0deg);
      opacity: 1;
   }

</style>
