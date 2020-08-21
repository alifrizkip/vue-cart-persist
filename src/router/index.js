import Vue from 'vue'
import VueRouter from 'vue-router'
import Base from '../layouts/Base.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: Base,
    children: [
      {
        path: '',
        name: 'product-list',
        component: () => import(/* webpackChunkName: "product-list" */ '../pages/ProductList.vue'),
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import(/* webpackChunkName: "cart" */ '../pages/Cart.vue')
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
