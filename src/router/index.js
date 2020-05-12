import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import CharacterInfo from '@/pages/CharacterInfo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/characterinfo/:id',
    name: 'CharacterInfo',
    component: CharacterInfo
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
