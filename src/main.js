import { createApp } from 'vue';
import App from './App.vue';

import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';

import Message from 'primevue/message';
import ConfirmPopup from 'primevue/confirmpopup';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';



import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const app = createApp(App);

app.use(PrimeVue, {ripple: true});
app.use(ConfirmationService);

app.component('Message', Message);
app.component('ConfirmPopup', ConfirmPopup);
app.component('InputText', InputText);
app.component('Button', Button);

app.mount('#app');
