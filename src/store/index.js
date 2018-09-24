import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        switcher : '/'
    },
    getters:{
        // Compute derived state based on the current state. More like computed property.
    },
    mutations:{
        switchTo( state , switch_value){
            state.switcher = switch_value;
        }
    },
    actions:{
        // Get data from server and send that to mutations to mutate the current state
    }
})