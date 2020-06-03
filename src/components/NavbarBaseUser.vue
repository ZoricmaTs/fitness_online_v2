<template>
  <header class="block-grid navb-block">
    <h1 class="logo__min">Fitness</h1>
    <div class="navb__auth-block">
      <nav class="navb__auth text__heading_size_m">
        <ul class="navb__list-auth">
          <li class="navb__item">
            <router-link class="navb__link" :to="{ name: 'aboutserviceUser' }">О сервисе</router-link>
          </li>
          <li class="navb__item">
            <router-link class="navb__link" :to="{ name: 'ourTrainersUser' }">Наши тренеры</router-link>
          </li>
          <li class="navb__item">Виды тренировок</li>
          <li class="navb__item">
            <router-link class="navb__link" :to="{ name: 'questionsUser' }">Вопросы и ответы</router-link>
          </li>
          <li class="navb__item">
            <router-link class="navb__link" :to="{ name: 'contactDetailUser' }">Контакты</router-link>
          </li>
        </ul>
      </nav>
      <div class="exit-block">
        <div class="exit-block__text">{{ email }}</div>
        <img class="exit-block__btn" src="../assets/img/exit.svg" @click="logout" />
      </div>
    </div>
  </header>
</template>

<script>
import AuthorizationService from '@/services/AuthorizationService.js'
export default {
  data() {
    return {
      email: localStorage.email
    }
  },
  methods: {
    logout() {
      AuthorizationService.login(this.email, this.password).then(response => {
        localStorage.token = ''
        localStorage.email = ''
        this.$router.push({ name: 'Home' })
      })
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/navbar.scss';
</style>
