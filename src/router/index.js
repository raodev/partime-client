import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import IndexPage from '@/pages/index'
import BlogPage from '@/pages/blog'
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
    }
  ],
    mode : 'history'
})
