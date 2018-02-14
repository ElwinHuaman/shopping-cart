import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        message: 'Heelo Elwin Status Vuex',
        count: 0
    },

    getters: {
        message(state){
            return state.message.toUpperCase();
        },
        counter(state) {
            return state.count;
        },
        contador(state){
            return state.count;
        }
    },

    mutations: { //syncronous
        increment(state, payload){
            state.count+=payload;
        },
        add(state, payload){
            
        }
    },
    actions: { //asyncronous
        increment(state, payload){
            state.commit('increment', payload)
        }
    }
})