<template>
   <div id="app">
      <div id="nav">
         <router-link to="/">Home</router-link>&nbsp;|&nbsp;<router-link to="/about">About</router-link>
      </div>
      <transition name="view">
         <router-view/>
      </transition>
   </div>
</template>

<style>

   body {
      margin: 0;
      padding: 0;
      background: #f3f3f3;
   }

   #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      padding: 15px;
   }

   #nav {
      padding: 30px;
   }

   #nav a {
      font-size: 16px;
      text-decoration: none;
      color: #2c3e50;
   }

   #nav a.router-link-exact-active {
      color: #ffce00;
   }

   .page {
      display: block;
      margin: 0 auto;
      width: 100%;
      max-width: 760px;
      padding: 15px;
      box-sizing: border-box;
   }

   .view-enter-active, .view-leave-active {
      transition: opacity 0.3s ease-in-out, transform 0.3s ease;
   }

   .view-enter-active {
      transition-delay: 0.3s;
   }

   .view-enter { /* Enter from */
      transform: translateX(300px);
      opacity: 0;
   }

   .view-leave-to { /* Leave to */
      transform: translateX(-300px);
      opacity: 0;
   }

   .view-enter-to, .view-leave { /* Enter to and Leave from */
      transform: translateX(0px);
      opacity: 1;
   }

</style>
