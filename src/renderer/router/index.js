import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: require('@/components/Login').default
    },
    {
      path: '/chat/:user',
      name: 'chat',
      component: require('@/components/Chat').default,
      props: true
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
