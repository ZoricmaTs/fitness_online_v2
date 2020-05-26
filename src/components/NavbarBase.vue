<template>
  <header class="block-grid navb-block">
    <h1 class="logo__min">Fitness</h1>
    <div class="navb__auth-block">
      <nav class="navb__auth text__heading_size_m">
        <ul class="navb__list-auth">
          <li class="navb__item">
            <router-link class="navb__link" :to="{ name: 'aboutserviceUser' }"
              >О сервисе</router-link
            >
          </li>
          <li class="navb__item">
             <router-link class="navb__link" :to="{ name: 'ourTrainersUser' }"
              >Наши тренеры
              </router-link>
          <li>
          <li class="navb__item">Виды тренировок</li>
          <li class="navb__item">Вопросы и ответы</li>
          <li class="navb__item">Контакты</li>
        </ul>
      </nav>
      <div class="exit-block">
        <div class="exit-block__text">
          mark@mark.com
        </div>
        <img class="exit-block__btn" src="../assets/img/exit.svg" />
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '@/assets/scss/navbar.scss';
</style>
