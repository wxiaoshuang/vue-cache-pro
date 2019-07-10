import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home'
import pageAList from '../pages/pageAList'
import pageADetail from '../pages/pageADetail'
import pageB from '../pages/pageB'
import main from '../pages/main'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main,
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: home
        },
        {
          path: 'pageAList',
          name: 'pageAList',
          component: pageAList,
          meta: {
            keepAlive: true
          }
        },
        {
          path: 'pageB',
          component: pageB
        }
      ]
    },
    {
      path: '/pageADetail',
      name: 'pageADetail',
      component: pageADetail
    }
  ]
})
