import Vue from 'vue'
import Router from 'vue-router'

import landingComponent from '../components/landingComponent.vue'
import userInfo from '../components/userInfoComponent.vue'
Vue.use(Router)
const routes = [
  {
    path: '/',
    component: landingComponent
  }, {
    path: '/detail/:id',
    component: userInfo
  }
]

export default new Router({
  routes
})
