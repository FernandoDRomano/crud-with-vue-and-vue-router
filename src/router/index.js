import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/todos'
  },
  {
    path: '/todos',
    name: 'list-todos',
    component: () => import(/* webpackChunkName: "list-todos" */ '../views/ListTodos.vue')
  },
  {
    path: '/create',
    name: 'create-todo',
    component: () => import(/* webpackChunkName: "create-todo" */ '../views/CreateTodo.vue')
  },
  {
    path: '/:id/update',
    name: 'update-todo',
    component: () => import(/* webpackChunkName: "update-todo" */ '../views/UpdateTodo.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
