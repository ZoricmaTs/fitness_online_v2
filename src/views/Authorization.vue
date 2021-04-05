<template>
  <section class="singin-bg block-grid">
    <router-link
      :to="{ name: 'Home' }"
      class="singin__linkback text__heading_size_l"
    >
      <img src="../assets/img/Arrow.svg" alt="backlink" />
      Назад
    </router-link>
    <form class="singin" @submit.prevent="getRole">
      <h1 class="singin__logo logo__title">Fitness</h1>
      <div class="form-blocks">
        <h1 class="singin__heading text__heading_size_h1">Вход в систему</h1>
        <div class="form-block">
          <span
            v-if="$v.email.$error"
            class="singup__err text__heading_size_h3"
          >
            <template v-if="!$v.email.minLength">
              Длина email не должна быть менее
              {{ $v.email.$params.minLength.min }} символов
            </template>
            <template v-if="!$v.email.maxLength"
              >Слишком длинный E-mail</template
            >
            <template v-else-if="!$v.email.email">Некорректный email</template>
            <template v-if="!$v.email.required"
              >Это поле обязательно для заполнения.</template
            >
          </span>
          <input
            type="email"
            name="email"
            placeholder="Ваш e-mail"
            class="singin__input text__heading_size_h2"
            v-model="email"
          />
        </div>
        <div class="form-block">
          <span
            v-if="$v.password.$error"
            class="singup__err text__heading_size_h3"
          >
            <template v-if="!$v.password.minLength">
              Длина пароля не должна быть менее
              {{ $v.password.$params.minLength.min }} символов
            </template>
            <template v-if="!$v.password.maxLength"
              >Слишком длинный пароль</template
            >
            <template v-if="!$v.password.required"
              >Это поле обязательно для заполнения.</template
            >
          </span>
          <div class="singin__input-pass-block">
            <input
              :type="showPassword ? 'text' : 'password'"
              name="password"
              placeholder="Пароль"
              class="singin__input-pass text__heading_size_h2"
              v-model="password"
            />
            <button
              class="singin__input-passbtn"
              @click="showPassword = !showPassword"
            >
              <i class="material-icons singin__icon">{{
                showPassword ? 'visibility' : 'visibility_off'
              }}</i>
            </button>
          </div>
          <div class="singin__block-btn">
            <div class="singin__block-link">
              <router-link
                :to="{ name: 'signup' }"
                class="singin__link singin__link_color-white text__heading_size_m"
                >Регистрация/</router-link
              >
              <a
                href="#"
                class="singin__link singin__link_color-orange text__heading_size_m"
                >Забыли пароль?</a
              >
            </div>
            <button
              type="submit"
              class="btn__title btn__title_color_orangeb text__heading_size_h3"
            >
              ВОЙТИ
            </button>
          </div>
          <div class="singin__err text__heading_size_h3">
            {{ errArray['email'] ? errArray['email'].toString() : '' }}
          </div>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import AuthorizationService from '@/services/AuthorizationService.js'
import {
  required,
  maxLength,
  minLength,
  sameAs,
  email
} from 'vuelidate/lib/validators'
import moment from 'moment'
const mustBeChecked = value => value == true
export default {
  name: 'authorization',
  data() {
    return {
      email: '',
      password: '',
      errArray: {},
      showPassword: false
    }
  },
  validations: {
    email: {
      required,
      email,
      minLength: minLength(6),
      maxLength: maxLength(255)
    },
    password: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(32)
    }
  },

  methods: {
    getRole() {
      this.$router.push({
        name: 'aboutserviceTrainer',
        params: { id: 42 }
      }) //заплатка
      return
      AuthorizationService.login(this.email, this.password).then(response => {
        if (response.data.success == true) {
          const userI = response.data
          localStorage.token = response.data.token
          localStorage.email = this.email
          localStorage.user_id = response.data.user_id
          if (userI.role == 'trainer') {
            this.$router.push({
              name: 'aboutserviceTrainer',
              params: { id: userI.user_id }
            })
          } else {
            this.$router.push({
              name: 'aboutserviceUser',
              params: { id: userI.user_id }
            })
          }
        } else {
          if (response.data.database_error.indexOf('is incorrect') != -1) {
            this.errArray = {
              email: ['Неверный логин или пароль']
            }
          }
          if (response.data.database_error.indexOf('is not confirmed') != -1) {
            this.errArray = {
              email: ['Аккаунт не активирован. Пожалуйста проверьте почту']
            }
          }
          if (response.data.database_error.indexOf('not found') != -1) {
            this.errArray = {
              email: ['Данная почта не зарегистрирована']
            }
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/registers.scss';
@import '@/assets/scss/variables.scss';
</style>
