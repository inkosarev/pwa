import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from '../store/index'

import Statistic from '../views/Statics'
import TransactionCard from '../components/TransactionCard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Statistic',
    component: Statistic
  }, {
    path: '/transaction/:id',
    name: 'TransactionCard',
    component: TransactionCard,
    // eslint-disable-next-line no-unused-vars
    beforeEnter: (to, from, next) => {
      if (Store.state.transactions[to.params.id]) next()
      else router.replace('/')
    }
  }, {
    path: '*', redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
