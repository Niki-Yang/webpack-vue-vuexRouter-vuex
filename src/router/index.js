import Vue from 'vue'
import Router from 'vue-router'
import navTop from '@/components/nav-top'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'navTop',
      component: navTop
    }
  ]
})
