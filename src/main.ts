import './index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { plugin, defaultConfig } from '@formkit/vue'
import "aos/dist/aos.css"
import formkitConfig from '../formkit.config'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { useToast } from 'vue-toast-notification'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faScroll, faFolder, faCodeBranch, faGlobe, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faVuejs, faReact, faNodeJs, faFacebook, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'



import App from './App.vue'
import router from './router'

import "vue-toast-notification/dist/theme-sugar.css"

library.add(faScroll, faFolder, faCodeBranch, faGithub, faVuejs, faReact, faNodeJs, faGlobe, faFacebook, faLinkedin, faInstagram, faGraduationCap, faTwitter);

const $toast = useToast({
    duration: 3000,
    position: 'top-right'
})

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(VueSweetalert2);
app.use(createPinia())
app.use(router)
app.use(plugin, defaultConfig(formkitConfig))
app.provide('toast', $toast)
app.use(VueViewer)



app.mount('#app')
