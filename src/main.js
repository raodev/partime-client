import Vue from 'vue'
import App from './App'
import router from './router'
import {layout, VueExtendLayout} from 'vue-extend-layout'

Vue.config.productionTip = false
Vue.use(VueExtendLayout)
new Vue({
    el: '#app',
    router,
    ...layout,
    components: {App},
    template: '<App/>'
})