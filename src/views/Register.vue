<template>
  <section class="singup-bg block-grid">
    <router-link :to="{ name: 'Home' }" class="singin__linkback text__heading_size_l">
      <img src="../assets/img/Arrow.svg" alt="backlink" />
      Назад
    </router-link>
    <form class="singup" @submit.prevent="getRoleRegister">
      <h1 class="singup__heading text__heading_size_h1">Регистрация</h1>
      <div class="form-block">
        <span v-if="$v.first_name.$error" class="singup__err text__heading_size_h3">
          <template v-if="!$v.first_name.minLength">
            Длина имени не должна быть менее
            {{ $v.first_name.$params.minLength.min }} символов
          </template>
          <template v-if="!$v.first_name.maxLength">Слишком длинное имя</template>
          <template
            v-else-if="!$v.first_name.alpha"
          >Имя должно содержать латинские или русские буквы.</template>
          <template v-if="!$v.first_name.required">Это поле обязательно для заполнения.</template>
        </span>
        <input
          type="text"
          name="first_name"
          placeholder="Ваше имя"
          class="singup__input text__heading_size_h2"
          v-model="first_name"
          @blur="$v.first_name.$touch()"
        />
      </div>
      <div class="form-block">
        <span v-if="$v.email.$error" class="singup__err text__heading_size_h3">
          <template v-if="!$v.email.minLength">
            Длина email не должна быть менее
            {{ $v.email.$params.minLength.min }} символов
          </template>
          <template v-if="!$v.email.maxLength">Слишком длинный E-mail</template>
          <template v-else-if="!$v.email.email">Некорректный email</template>
          <template v-if="!$v.email.required">Это поле обязательно для заполнения.</template>
        </span>
        <input
          type="email"
          name="email"
          placeholder="Ваш e-mail"
          class="singup__input text__heading_size_h2"
          v-model="email"
          @blur="$v.email.$touch()"
        />
      </div>
      <div class="form-block">
        <span v-if="$v.password.$error" class="singup__err text__heading_size_h3">
          <template v-if="!$v.password.minLength">
            Длина пароля не должна быть менее
            {{ $v.password.$params.minLength.min }} символов
          </template>
          <template v-if="!$v.password.maxLength">Слишком длинный пароль</template>
          <template v-if="!$v.password.required">Это поле обязательно для заполнения.</template>
        </span>
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          class="singup__input text__heading_size_h2"
          v-model="password"
          @blur="$v.password.$touch()"
        />
      </div>
      <div class="form-block">
        <span v-if="$v.password_confirmation.$error" class="singup__err text__heading_size_h3">
          <template v-if="!$v.password_confirmation.required">Это поле обязательно для заполнения.</template>
          <template v-if="!$v.password_confirmation.sameAsPassword">Пароли должны совпадать</template>
        </span>
        <input
          type="password"
          name="password_confirmation"
          placeholder="Повторите пароль"
          class="singup__input text__heading_size_h2"
          v-model="password_confirmation"
          @blur="$v.password_confirmation.$touch()"
        />
      </div>
      <span v-if="$v.role.$error" class="singup__err text__heading_size_h3">
        <template v-if="!$v.role.required">Выберите вид деятельности</template>
      </span>
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

      <span
        v-if="$v.checked_policy.$error"
        class="singup__err text__heading_size_h3"
        @click="$v.checked_policy.$touch()"
      >
        <template
          v-if="!$v.checked_policy.mustBeChecked"
        >Необходимо указать, что вы согласны с политикой конфиденциальности</template>
      </span>

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

      <button
        type="submit"
        class="btn__big btn__title_color_orangeb text__heading_size_h2 signup__btn"
      >Зарегистрироваться</button>
    </form>
    <MailCheck
      v-if="showModalMailCheck"
      @mailcheck="showModalMailCheck = !showModalMailCheck"
      @close="showModalMailCheck = !showModalMailCheck"
    />
  </section>
</template>

<script>
import AuthorizationService from '@/services/AuthorizationService.js'
import MailCheck from '@/components/MailCheck.vue'
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
  components: {
    MailCheck
  },
  data() {
    return {
      first_name: '',
      email: '',
      password: '',
      password_confirmation: '',
      role: '',
      errArray: {},
      checked_policy: null,
      showModalMailCheck: false
    }
  },
  validations: {
    first_name: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(60),
      alpha: val => /^[a-zа-яё'\s\-]*$/i.test(val)
    },
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
    },
    password_confirmation: {
      required,
      sameAsPassword: sameAs('password')
    },
    role: {
      required
    },
    checked_policy: {
      mustBeChecked
    }
  },
  methods: {
    onRegister() {
      this.showModalMailCheck = true
    },

    getRoleRegister() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
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
              response.data.token
            ).then(response => {
              AuthorizationService.login(this.email, this.password).then(
                response => {
                  if (response.data.success == true) {
                    const userI = response.data
                    localStorage.token = response.data.token
                    localStorage.email = this.email
                    localStorage.role = response.data.role
                    localStorage.user_id = response.data.user_id
                    this.onRegister()
                  }
                }
              )
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
}
</script>

<style lang="scss">
@import '@/assets/scss/registers.scss';
@import '@/assets/scss/variables.scss';
</style>
