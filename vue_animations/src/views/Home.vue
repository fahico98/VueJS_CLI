
<template>
   <div class="home">
      <button v-on:click="bounce = !bounce" id="bounceButton">Bounce animation</button>
      <section>
         <transition name="bounce">
            <img v-if="bounce" alt="Vue logo" width="200px" src="../assets/logo.png">
         </transition>
      </section>
      <button v-on:click="roll = !roll" id="rollButton">Roll animation</button>
      <section>
         <transition name="roll">
            <img v-if="roll" alt="Vue logo" width="200px" src="../assets/logo.png">
         </transition>
      </section>
   </div>
</template>

<script>

   export default {
      name: 'Home',
      data(){
         return {
            bounce: false,
            roll: false
         }
      }
   }

</script>

<style scoped>
   
   section {
      min-height: 220px;
   }

   .bounce-enter-active {
      animation: bounce-in 0.3s;
   }

   .bounce-leave-active {
      animation: bounce-in 0.3s reverse;
   }

   @keyframes bounce-in {
      0% {
         transform: scale(0);
      }
      50% {
         transform: scale(1.2);
      }
      100% {
         transform: scale(1);
      }
   }

   .roll-enter-active {
      animation: roll-in 0.3s;
   }

   .roll-leave-active {
      animation: roll-in 0.3s reverse;
   }

   @keyframes roll-in {
      0% {
         transform: scale(0) rotateZ(0deg) translateX(-250px);
         opacity: 0;
      }
      20% {
         opacity: 1;
      }
      100% {
         transform: scale(1) rotateZ(360deg) translateX(0px);
         opacity: 1;
      }
   }

   #bounceButton, #rollButton{
      display: block;
      margin: 10px auto;
   }

</style>
