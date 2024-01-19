import { createApp } from 'vue'
import '@/assets/styles.scss';
import "bootstrap/dist/css/bootstrap.min.css"
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'

import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import InputNumber from 'primevue/inputnumber';
import InputSwitch from 'primevue/inputswitch';

import App from './App.vue'
import router from './router'
import '@/assets/styles.scss';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('InputMask', InputMask)
app.component('InputNumber', InputNumber)
app.component('InputSwitch', InputSwitch)
app.component('InputText', InputText)
app.use(PrimeVue,{ripple: true})
app.mount('#app')
