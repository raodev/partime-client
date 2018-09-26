import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VeeValidate from 'vee-validate';
import {layout, VueExtendLayout} from 'vue-extend-layout'

Vue.config.productionTip = false
Vue.use(VueExtendLayout)
const validate_config = {
    locale: 'vi'
}
Vue.use(VeeValidate, validate_config)
new Vue({
    el: '#app',
    router,
    store,
    ...layout,
    components: {App},
    template: '<App/>'
})
