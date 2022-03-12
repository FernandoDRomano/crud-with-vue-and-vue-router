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
    component: () => import(/* webpackChunkName: "list-todos-view" */ '../views/ListTodosView.vue')
  },
  {
    path: '/create',
    name: 'create-todo',
    component: () => import(/* webpackChunkName: "create-todo-view" */ '../views/CreateTodoView.vue')
  },
  {
    path: '/:id/update',
    name: 'update-todo',
    component: () => import(/* webpackChunkName: "update-todo-view" */ '../views/UpdateTodoView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: "active-class",
  linkActiveClass: "active-class",
  routes
})

export default router
