import { createApp } from 'vue'
import './assets/base.css'
import App from './App.vue'
import Router from './router'
import Prismic from './prismic'

createApp(App).use(Router).use(Prismic).mount('#app')