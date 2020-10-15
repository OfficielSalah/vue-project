import Vue from 'vue'
import Router from 'vue-router'

import landingComponent from '../components/landingComponent.vue'
import userInfo from '../components/userInfoComponent.vue'
Vue.use(Router)
// eslint-disable-next-line spaced-comment
//const DETAIL_URL = 'test'

const routes = [
  {
    path: '/',
    component: landingComponent
  }, {
    path: process.env.DETAIL_URL + '/:id',
    component: userInfo
  }
]

export default new Router({
  routes
})
