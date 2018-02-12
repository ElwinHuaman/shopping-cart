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

export default {
  firebase: {
      products: productsRef
  }
}
</script>

<style scoped>

</style>
