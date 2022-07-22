import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    //component: HomeView
    redirect: "/contacts",
  },


  {
    path: '/contacts-new',
    name: 'ContactsNew',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactsNew.vue')
  },

  {
    path: '/contacts',
    name: 'ContactsList',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactsList.vue')
  },

  {
    path: '/contacts/:id',
    name: 'ContactItem',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactItem.vue')
  },

 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
