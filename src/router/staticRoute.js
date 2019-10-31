const staticRoute = [{
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: resolve => require(['@/views/login'], resolve)
    },
    {
        path: '/error',
        component: resolve => require(['@/views/error/401'], resolve),
    },
    {
        path: '/home',
        name:'home',
        component: resolve => require(['@/views/home'], resolve),
    }
]

export default staticRoute