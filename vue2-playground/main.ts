import Vue from 'vue'
import TemplateComponent from '../src/index'
import App from './App.vue'

console.warn('Vue version:', Vue.version)
Vue.config.productionTip = false
Vue.use(TemplateComponent)

new Vue({ render: h => h(App) }).$mount('#app')
