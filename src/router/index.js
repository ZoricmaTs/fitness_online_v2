import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import EmailConfirmation from '../views/EmailConfirmation.vue'
import Authorization from '../views/Authorization.vue'
import Register from '../views/Register.vue'
import TermsOfService from '../views/TermsOfService.vue'
import AboutService from '../views/AboutService.vue'
//import ProfileUserStart from '../views/User/ProfileUserStart.vue'
import OurTrainers from '../views/User/OurTrainers.vue'
//import ProfileTrainerStart from '../views/Trainer/ProfileTrainerStart.vue'

import AboutServiceAuth from '../views/User/AboutServiceAuth.vue'
import SettingUser from '../views/User/SettingUser.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    name: 'signin',
    component: Authorization
  },
  {
    path: '/signup',
    name: 'signup',
    component: Register
  },
  {
    path: '/termsofservice',
    name: 'termsofservice',
    component: TermsOfService
  },
  {
    path: '/aboutservice',
    name: 'aboutservice',
    component: AboutService
  },
  {
    path: '/profiletrainerstart/:id/aboutservice',
    name: 'aboutserviceTrainer',
    component: AboutServiceAuth,
    props: true
  },
  {
    path: '/profileuserstart/:id/aboutservice',
    name: 'aboutserviceUser',
    component: AboutServiceAuth,
    props: true
  },
  {
    path: '/profileuserstart/:id/SettingUser',
    name: 'settingUser',
    component: SettingUser,
    props: true
  },
  {
    path: '/profileuserstart/:id/ourtrainers',
    name: 'ourTrainersUser',
    component: OurTrainers,
    props: true
  },

  {
    path: '/email_confirmation',
    name: 'email_confirmation', //для роутеров
    component: EmailConfirmation,
    props: route => ({ email: route.query.email, code: route.query.code })
  }
]

const router = new VueRouter({
  routes
})

export default router
