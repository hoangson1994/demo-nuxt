import Vue from 'vue'
import Router from 'vue-router'

import index from '~/pages/index.vue';
import about from '~/pages/about.vue';

Vue.use(Router);

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '/',
                component: index
            },
            {
                path: '/about-us',
                component: about
            }
        ]
    })
}
