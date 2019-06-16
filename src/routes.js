import Home from './Views/Home'
import Blogs from './Views/Blogs'
import Detail from './Views/Detail'
import Contact from './Views/Contact'
import Login from './Views/Login'
import NotFound from './Views/NotFound'

import React from 'react'

function dashboard() {
    return (
        <div>
            dashboard
        </div>
    )
}



const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/blogs',
        component : Blogs,
        exact:true
    },
    {
        path: '/blogs/:id',
        component: Detail,
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/login',
        component: Login
    },
    {
        path:'/admin/dashboard',
        component: dashboard,
        auth: true,
        exact: true
    },
    {
        path:'/admin/properties',
        component: dashboard,
        auth: false,
        exact: true
    },
    {
        component: NotFound
    }
]

export default routes