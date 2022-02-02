import {createApp} from 'vue'
import App         from './App.vue'
import router      from './router'
import store       from './store'

// import css
import 'bootstrap/dist/css/bootstrap.css'
import 'line-awesome/dist/line-awesome/css/line-awesome.css'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
