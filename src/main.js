import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import bootstrapvue from'bootstrap-vue/dist/bootstrap-vue.js'

// import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

createApp(App).use(store).use(router).use(bootstrap).mount('#app')
