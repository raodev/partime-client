import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {layout, VueExtendLayout} from 'vue-extend-layout'

Vue.config.productionTip = false
Vue.use(VueExtendLayout)
new Vue({
    el: '#app',
    router,
    store,
    ...layout,
    components: {App},
    template: '<App/>'
})
