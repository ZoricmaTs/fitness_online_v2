<template>
  <section class="singup-bg block-grid">
    <router-link :to="{ name: 'Home' }" class="singin__linkback text__heading_size_l">
      <img src="../assets/img/Arrow.svg" alt="backlink" />
      Назад
    </router-link>
    <form class="singup" @submit.prevent="getRoleRegister">
      <h1 class="singup__heading text__heading_size_h1">Регистрация</h1>
      <div class="form-block">
        <div
          class="singup__err text__heading_size_h3"
        >{{ errArray['first_name'] ? errArray['first_name'].toString() : '' }}</div>
        <input
          type="text"
          name="first_name"
          placeholder="Ваше имя"
          class="singup__input text__heading_size_h2"
          v-model="first_name"
          required
        />
      </div>
      <div class="form-block">
        <div
          class="singup__err text__heading_size_h3"
        >{{ errArray['email'] ? errArray['email'].toString() : '' }}</div>
        <input
          type="email"
          name="email"
          placeholder="Ваш e-mail"
          class="singup__input text__heading_size_h2"
          v-model="email"
        />
      </div>
      <div class="form-block">
        <div
          class="singup__err text__heading_size_h3"
        >{{ errArray['password'] ? errArray['password'].toString() : '' }}</div>
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          class="singup__input text__heading_size_h2"
          v-model="password"
        />
      </div>
      <div class="form-block">
        <input
          type="password"
          name="password_confirmation"
          placeholder="Повторите пароль"
          class="singup__input text__heading_size_h2"
          v-model="password_confirmation"
        />
      </div>
      <div class="radio-buttons">
        <div class="radio-buttons-role">
          <input
            class="radio-buttons-role__input"
            type="radio"
            id="trainer"
            name="role"
            value="trainer"
            v-model="role"
            checked
          />
          <label
            for="trainer"
            class="radio-buttons-role__label text__heading_size_h3"
          >Хочу быть тренером</label>
        </div>
        <div class="radio-buttons-role">
          <input
            class="radio-buttons-role__input"
            type="radio"
            id="user"
            name="role"
            value="user"
            v-model="role"
          />
          <label
            for="user"
            class="radio-buttons-role__label text__heading_size_h3"
          >Хочу тренироваться</label>
        </div>
      </div>
      <label class="check option-check">
        <input class="check__input" type="checkbox" v-model="checked_policy" />
        <span class="check__box"></span>
        <div class="check__text">
          <span class="check__text-body text__heading_size_m">
            Нажимая кнопку “Зарегистрироваться”, я принимаю
            <router-link
              :to="{ name: 'termsofservice' }"
              class="check__text-body-link"
            >пользовательское соглашение</router-link>и соглашаюсь с правилами использования и обработки персональных
            данных
          </span>
        </div>
      </label>
      <div
        class="check__policy signin__err"
        v-show="checked_policy == false"
      >“Необходимо указать, что вы согласны с политикой конфиденциальности”.</div>
      <button
        type="submit"
        :disabled="!checked_policy"
        class="btn__big btn__title_color_orangeb text__heading_size_h2 signup__btn"
      >Зарегистрироваться</button>
    </form>
  </section>
</template>

<script>
import AuthorizationService from '@/services/AuthorizationService.js'
import ModalInfo from '@/components/ModalInfo.vue'
export default {
  components: {
    ModalInfo
  },
  data() {
    return {
      first_name: '',
      email: '',
      password: '',
      password_confirmation: '',
      role: '',
      errArray: {},
      checked_policy: null
    }
  },

  methods: {
    validate() {
      let isValid = true
      if (this.password.length < 8) {
        this.errArray = { password: ['Слишком короткий пароль'] }
        isValid = false
      }
      if (this.first_name.length < 2) {
        this.errArray = { first_name: ['Слишком короткое имя'] }
        isValid = false
      }
      if (this.email.length < 6) {
        this.errArray = { email: ['Слишком короткий email'] }
        isValid = false
      }
      if (this.password != this.password_confirmation) {
        this.errArray = { password: ['Пароли должны совпадать'] }
        isValid = false
      }
      return isValid
    },
    getRoleRegister() {
      var valid = this.validate()
      if (valid == false) {
        return
      }
      AuthorizationService.register(
        this.first_name,
        this.email,
        this.role,
        this.password,
        this.password_confirmation
      ).then(response => {
        if (response.data.success == true) {
          localStorage.token = response.data.token
          localStorage.email = response.data.email
          let confirmation_code = '123456'
          AuthorizationService.confirmAccount(
            this.email,
            confirmation_code,
            localStorage.token
          ).then(response => {
            alert('Вы успешно зарегистрированы')
          })
        } else {
          if (response.data.database_error.indexOf('already exists') != -1) {
            this.errArray = { email: ['Такой пользователь уже существует'] }
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/registers.scss';
</style>
