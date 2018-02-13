<template>
  <div>
      <h1>Product List</h1>
      <ul>
        <li v-for="product of products"
            v-bind:key="product['.key']">{{product.title}} - {{product.id}} - {{product.price}}, {{product.inventory}}
        </li>          
      </ul>
  </div>
</template>
<script>
import {productsRef} from '../firebase';
import store from '@/store/index'

export default {
    firebase: {
        products: productsRef
    },
    computed:{
        products (){
            return store.state.products
        }
    },
    created (){
        store.state.products = products
    }
}
</script>

<style scoped>

</style>
