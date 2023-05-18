import { createWebHistory, createRouter } from 'vue-router'
import Container from '@/components/Container.vue'
import Test from '@/components/Test.vue'
import SendData from '@/components/global/SendData.vue'
import AddUser from '@/components//global/AddUser.vue'
import Weather from '@/components//global/Weather.vue'

const routes = [
  {
    path: '/',
    name: 'Container',
    component: Container
  },
  {
    path: '/weather',
    name: 'Weather',
    component: Weather
  },
  {
    path: '/testone',
    name: 'Test',
    component: Test
  },
  {
    path: '/senddata',
    name: 'SendData',
    component: SendData
  },
  {
    path: '/adduser',
    name: 'AddUser',
    component: AddUser
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
