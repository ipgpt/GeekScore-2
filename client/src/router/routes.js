const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/HomePage'),
        // TODO: add vue-meta
        meta: {
            title: 'Geek Score - Homepage',
            metaTags: {
                name: 'description',
                content: 'A starting page where described the idea of Geek Score',
            },
        },
    },
    {
        path: '/games',
        name: 'games',
        component: () =>
            import(/* webpackChunkName: "games" */ '../views/GameList'),
        meta: {
            requiresAuth: true,
            title: 'Geek Score - Games page',
            metaTags: {
                name: 'description',
                content: "A list of user's games",
            },
        },
    },
    {
        path: '/game/:gameId',
        name: 'game',
        props: true,
        component: () =>
            import(/* webpackChunkName: "game" */ '../views/GameDetails'),
        meta: {
            requiresAuth: true,
            title: 'Geek Score - Game page',
            metaTags: {
                name: 'description',
                content: 'Game details page',
            },
        },
    },
    {
        path: '/profile',
        name: 'profile',
        component: () =>
            import(/* webpackChunkName: "profile" */ '../views/ProfileDetails'),
        meta: {
            requiresAuth: true,
            title: 'Geek Score - Profile page',
            metaTags: {
                name: 'User Profile',
                content: 'User Profile page',
            },
        },
    },
    {
        path: '/team/:teamId',
        name: 'team',
        props: true,
        component: () =>
            import(/* webpackChunkName: "team" */ '../views/TeamDetails'),
        meta: {
            requiresAuth: true,
            title: 'Geek Score - Team page',
            metaTags: {
                name: 'description',
                content: 'Team details page',
            },
        },
    },
    {
        path: '/signin',
        name: 'signIn',
        component: () => import(/* webpackChunkName: "signIn" */ '../views/SignIn'),
        meta: {
            title: 'Geek Score - Sign in page',
            metaTags: {
                name: 'description',
                content: 'A page for signing in',
            },
        },
    },
    {
        path: '/signup',
        name: 'signUp',
        component: () => import(/* webpackChunkName: "signUp" */ '../views/SignUp'),
        meta: {
            title: 'Geek Score - Sign up page',
            metaTags: {
                name: 'description',
                content: 'A page for signing up',
            },
        },
    },
    {
        path: '/reset',
        name: 'resetPass',
        component: () =>
            import(/* webpackChunkName: "resetPass" */ '../views/ResetPassword'),
        meta: {
            title: 'Geek Score - Reset password page',
            metaTags: {
                name: 'description',
                content: 'A page for resetting a password',
            },
        },
    },
    {
        path: '/tools',
        name: 'tools',
        component: () =>
            import(/* webpackChunkName: "tools" */ '../views/ToolsPage'),
        meta: {
            requiresAuth: true,
            title: 'Geek Score - Tools page',
            metaTags: {
                name: 'description',
                content: "A list of tools for games",
            },
        },
    },
    {
        path: '/404',
        alias: '*',
        name: 'notFound',
        component: () =>
            import(/* webpackChunkName: "notFound" */ '../views/NotFound'),
        meta: {
            title: 'Geek Score - Not found page',
            metaTags: {
                name: 'description',
                content: 'An error page',
            },
        },
    },
];

export default routes;