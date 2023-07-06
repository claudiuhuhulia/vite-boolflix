import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 import { faStar as fasstar} from '@fortawesome/free-solid-svg-icons' 
  import { faStar as farstar } from '@fortawesome/free-regular-svg-icons'  

library.add(fasstar, farstar)

createApp(App).component('FontAwesomeIcon',FontAwesomeIcon)
.mount('#app')
