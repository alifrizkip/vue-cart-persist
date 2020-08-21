import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'product-list',
    component: () => import(/* webpackChunkName: "product-list" */ '../pages/ProductList.vue'),
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "cart" */ '../pages/Cart.vue')
  },
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
