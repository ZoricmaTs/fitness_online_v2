import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import EmailConfirmation from '../views/EmailConfirmation.vue'
import Authorization from '../views/Authorization.vue'
import Register from '../views/Register.vue'
import TermsOfService from '../views/TermsOfService.vue'
import AboutService from '../views/AboutService.vue'
import ContactDetail from '../views/ContactDetail.vue'

import OurTrainers from '../views/User/OurTrainers.vue'
import AboutServiceAuth from '../views/User/AboutServiceAuth.vue'
import AboutServiceTrainer from '../views/Trainer/AboutServiceTrainer.vue'

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
    path: '/contactdetail',
    name: 'contactdetail',
    component: ContactDetail
  },
  {
    path: '/aboutservice',
    name: 'aboutservice',
    component: AboutService
  },
  {
    path: '/profiletrainerstart/:id/aboutservice',
    name: 'aboutserviceTrainer',
    component: AboutServiceTrainer,
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
