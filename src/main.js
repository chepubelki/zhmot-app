import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { default as messagePlugin } from './utils/message.plugin'
import 'materialize-css/dist/js/materialize.min'
import { useVuelidate } from '@vuelidate/core'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyB-vKneBAE9QBcMq6jaVovAcgw2MkqQnwI",
    authDomain: "zhmot-app.firebaseapp.com",
    projectId: "zhmot-app",
    storageBucket: "zhmot-app.appspot.com",
    messagingSenderId: "780658593224",
    appId: "1:780658593224:web:3d5b3ed14adf6777f684fd",
    measurementId: "G-83E7CNGR2B"
};

firebase.initializeApp(firebaseConfig)

let app

firebase.auth().onAuthStateChanged(() => {
    if (!app) {
    app = createApp(App).use(store).use(router).use(useVuelidate).use(messagePlugin).mount('#app')    
    }
})
