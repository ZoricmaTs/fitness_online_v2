<template>
  <section class="singin-bg block-grid">
    <router-link :to="{ name: 'Home' }" class="singin__linkback text__heading_size_l">
      <img src="../assets/img/Arrow.svg" alt="backlink" />
      Назад
    </router-link>
    <form class="singin" @submit.prevent="getRole">
      <h1 class="singin__logo logo__title">Fitness</h1>
      <div class="form-blocks">
        <h1 class="singin__heading text__heading_size_h1">Вход в систему</h1>
        <div class="form-block">
          <input
            type="email"
            name="email"
            placeholder="Ваш e-mail"
            class="singin__input text__heading_size_h2"
            v-model="email"
          />
        </div>
        <div class="form-block">
          <div class="singin__input-pass-block">
            <input
              :type="showPassword ? 'text' : 'password'"
              name="password"
              placeholder="Пароль"
              class="singin__input-pass text__heading_size_h2"
              v-model="password"
            />
            <button class="singin__input-passbtn" @click="showPassword = !showPassword">
              <i class="material-icons singin__icon">
                {{
                showPassword ? 'visibility' : 'visibility_off'
                }}
              </i>
            </button>
          </div>
          <div class="singin__block-btn">
            <div class="singin__block-link">
              <router-link
                :to="{ name: 'signup' }"
                class="singin__link singin__link_color-white text__heading_size_m"
              >Регистрация/</router-link>
              <a
                href="#"
                class="singin__link singin__link_color-orange text__heading_size_m"
              >Забыли пароль?</a>
            </div>
            <button
              type="submit"
              class="btn__title btn__title_color_orangeb text__heading_size_h3"
            >ВОЙТИ</button>
          </div>
          <div
            class="singin__err text__heading_size_h3"
          >{{ errArray['email'] ? errArray['email'].toString() : '' }}</div>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import AuthorizationService from '@/services/AuthorizationService.js'
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

  methods: {
    getRole() {
      this.$router.push({
        name: 'aboutserviceTrainer',
        params: { id: 37 }
      })
      return
      AuthorizationService.login(this.email, this.password).then(response => {
        if (response.data.success == true) {
          const userI = response.data
          localStorage.token = response.data.token
          localStorage.email = response.data.email
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

<style lang="scss">
@import '@/assets/scss/registers.scss';
@import '@/assets/scss/variables.scss';
</style>
