import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyDvLXUj-TAY1vWKmzcqIhpQ5a48qnWXnNw",
    authDomain: "fir-vue-elwin.firebaseapp.com",
    databaseURL: "https://fir-vue-elwin.firebaseio.com",
    projectId: "fir-vue-elwin",
    storageBucket: "fir-vue-elwin.appspot.com",
    messagingSenderId: "785798611557"
  });

  export const db = app.database();
  export const productsRef = db.ref('products');