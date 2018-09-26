import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/index'
import BlogPage from '@/pages/blog'
import DashBoard from '@/components/dashboard/index'
import AddJob from '@/components/dashboard/employer/add-job'
import ListJob from '@/components/dashboard/employer/list-job'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'IndexPage',
            component: IndexPage
        },
        {
            path: '/blog',
            name: 'BlogPage',
            component: BlogPage
        },
        {
            path: '/dashboard',
            name: 'DashBoard',
            component: DashBoard,
            children: [
                {
                    path : 'add-job',
                    name : 'addNewJob',
                    component : AddJob
                },
                {
                    path : 'jobs',
                    name : 'ListJob',
                    component : ListJob
                }
            ]

        }
    ],
    mode: 'history'
})
