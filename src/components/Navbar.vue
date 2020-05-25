<template>
  <header class="block-grid navb-block">
    <h1 class="logo__min">Fitness</h1>
    <div class="navb-soc">
      <nav class="navb text__heading_size_m">
        <ul class="navb__list">
          <li class="navb__item">
            <router-link class="navb__link" :to="{ name: 'signup' }"
              >Регистрация</router-link
            >
          </li>

          <li class="navb__item">
            <router-link class="navb__link" :to="{ name: 'signin' }"
              >Вход</router-link
            >
          </li>

          <li class="navb__item">
            <router-link class="navb__link" :to="{ name: 'aboutservice' }"
              >О сервисе</router-link
            >
          </li>

          <li class="navb__item">Наши тренеры</li>
          <li class="navb__item">Виды тренировок</li>
          <li class="navb__item">Вопросы и ответы</li>
          <li class="navb__item">Контакты</li>
        </ul>
      </nav>
      <ul class="navb__soc social__list social__heading">
        <li class="social__item">
          <a class="social__link" href="#">
            <img
              src="../assets/img/facebook 1.svg"
              width="15"
              height="15"
              alt="social media facebook"
            />
          </a>
        </li>
        <li class="social__item">
          <a class="social__link" href="#">
            <img
              src="../assets/img/social-media 1.svg"
              width="15"
              height="15"
              alt="social media vkontakte"
            />
          </a>
        </li>
        <li class="social__item">
          <a class="social__link" href="#">
            <img
              src="../assets/img/social-network 1.svg"
              width="15"
              height="15"
              alt="social media instagram"
            />
          </a>
        </li>
        <li class="social__item">
          <a class="social__link" href="#">
            <img
              src="../assets/img/twitter 1.svg"
              width="15"
              height="13"
              alt="social media twitter"
            />
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '../assets/scss/navbar.scss';
</style>
