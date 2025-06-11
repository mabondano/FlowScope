import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Import PrimeVue and theme
import PrimeVue from 'primevue/config'
// Puedes elegir otro theme
import Aura from '@primeuix/themes/aura'

import 'primeicons/primeicons.css'

import Button from "primevue/button"




//createApp(App).mount('#app')
const app = createApp(App);
app.component('Button', Button)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.mount('#app')

