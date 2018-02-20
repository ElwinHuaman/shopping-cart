<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld/>     -->
    <!-- <ProductList/> -->
    <Example/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import ProductList from './components/ProductList'
import Example from './components/Example'

export default {
  name: 'app',
  components: {
    HelloWorld,
    ProductList,
    Example
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
