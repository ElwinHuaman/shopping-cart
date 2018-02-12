<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <div>
      <label>Name: </label>
      <input type="text" v-model="nombre" />
      <button @click="submitProduct">Add</button>
    </div>
    <div>
      <ul>
        <li v-for="product of products" 
        v-bind:key="product['.key']">{{product.title}}
        </li>
      </ul>
    </div>
  </div>  
</template>

<script>
import { productsRef } from '../firebase';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      id: 1,
      title: "iPad 4 Mini",
      price: 10.99,
      inventory: 2,
      nombre: "Elwin"
    }
  },
  firebase: {
    products: productsRef
  },
  methods: {
    submitProduct(){
        productsRef.push({ id: this.id, title: this.title, price: this.price, inventory: this.inventory, admin: this.nombre})
    }
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
