import {createApp}             from 'vue'
import App                     from './App.vue'
import router                  from './router'
import store                   from './store'
import {camelCase, upperFirst} from 'lodash'
import {Dropdown}              from 'bootstrap'

// import css
import 'bootstrap/dist/css/bootstrap.css'
import 'line-awesome/dist/line-awesome/css/line-awesome.css'

const app = createApp(App)

const requiredComponents = require.context(
    './components',
    true,
    /Base[A-Z]\w+\.(vue|js)$/,
);
requiredComponents.keys().forEach(fileName => {
    const componentConfig = requiredComponents(fileName);

    const componentName = upperFirst(
        camelCase(
            fileName
                .split('/')
                .pop()
                .replace(/\.\w+$/, ''),
        ),
    );
    app.component(componentName, componentConfig.default || componentConfig);
});

app.use(store)
    .use(router)
    .mount('#app');