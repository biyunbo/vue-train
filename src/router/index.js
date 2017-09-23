import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Start from '@/components/Start'
import End from '@/components/End'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/start',
      name: 'start',
      component: Start
    },
    {
      path: '/end',
      name: 'end',
      component: End
    }
  ]
})
