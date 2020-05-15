import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import Document from './views/Document.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Main,
        },
        {
            path: '/document',
            name: 'document',
            component: Document,
            props: true,
        }
    ]
})