
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
   state: {
      products: [
         {name: "Banana Skin", price: 20},
         {name: "Shiny Star", price: 40},
         {name: "Green Shells", price: 50},
         {name: "Red Shells", price: 75},
         {name: "Coffee Temptation", price: 105},
         {name: "Sweet Rainbow", price: 80},
         {name: "Strawberry Swing", price: 65}
      ]
   },
   getters: {
      saleProducts(state){
         let products = state.products.map((product) => {
            return {
               name: "***" + product.name + "***",
               price: product.price / 2
            }
         });
         return products;
      }
   },
   mutations: {
      reducePrice(state){
         return state.products.forEach((product) => {
            product.price--;
         });
      }
   },
   actions: {
      reducePrice(context){
         setTimeout(() => {
            context.commit("reducePrice");
         }, 2000);
      }
   },
   modules: {
   
   }
})
