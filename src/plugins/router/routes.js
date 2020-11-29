import Home from '@/views/Home.vue'
import Heroes from '@/views/Heroes.vue'
import Planets from '@/views/Planets.vue'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
    icon: 'mdi-home'
  },
  {
    path: '/heroes',
    name: 'Heroes',
    component: Heroes,
    icon: 'mdi-account-supervisor'
  },
  {
    path: '/planets',
    name: 'Planets',
    component: Planets,
    icon: 'mdi-web'
  }
]
