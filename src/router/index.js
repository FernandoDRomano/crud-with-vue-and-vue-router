import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

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
    component: () => import(/* webpackChunkName: "update-todo-view" */ '../views/UpdateTodoView.vue'),
    beforeEnter(to, from, next){
      const todo = store.state.todos.todos.find(e => e.id === to.params.id)

      if(!todo){
        next({name: 'NotFound', params: { '0': to.path } })
      }

      next()
    }
  },
  {
    path: '*', 
    name: 'NotFound', 
    component: () => import(/* webpackChunkName: "error-404-view */ '../views/Error404View.vue')
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
