<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ message }}</h2>
    <h3>{{ count }}</h3>
    <button @click="pressed">Increment</button>    
    <h1>Product List</h1>
      <ul>
        <li> 
          <ul v-for="product of products"
            v-bind:key="product['.key']"> <p> {{product.title}} - {{product.id}} - {{product.price}}, {{product.inventory}}
            <button @click="addExistence(product['.key'])">Add</button></p>
          </ul>
        </li>          
      </ul>
  </div>  
</template>

<script>
import {productsRef} from '../firebase';
import ex from '@/store/ex'

export default {
  name: 'Example',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title: 'Examples'
    }
  },
  computed: {
      message(){
          return ex.getters.message;
      },
      count(){
          return ex.getters.counter;
      },
      total(){
          return ex.getters.contador;
      }
  },
  methods: {
      pressed(){
          ex.dispatch('increment', 20);
      },
      addExistence(key){
          ex.dispatch('addProductExistence', 1);
      }
  },
  firebase: {
        products: productsRef
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
