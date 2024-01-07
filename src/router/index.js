import Search from '../components/Search.vue';
import Home from '../components/Home.vue';
// import More from '@/components/More';
import Me from '../components/Me.vue';
// import Login from '@/components/Login';
// import Detail from '@/components/Detail';

export const routes = [
    { path: '/', component: Home },
    { path: '/search', component: Search },
    // { path: '/video/:id', component: Detail },
    // { path: '/all', component: More },
    // { path: '/movie', component: More },
    // { path: '/tv', component: More },
    // { path: '/zy', component: More },
    // { path: '/login', component: Login },
    { path: '/me', component: Me },
];
