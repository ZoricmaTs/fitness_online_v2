<template>
  <header class="block-grid navb-block">
    <h1 class="logo__navb">Fitness</h1>
    <nav class="navb text__heading_size_m">
      <ul class="navb__list">
        <li class="navb__item">
          <a href="#about-service" class="navb__link">О сервисе</a>
        </li>
        <li class="navb__item">
          <a href="#trainings" class="navb__link">Тренировки</a>
        </li>
        <li class="navb__item">
          <router-link class="navb__item navb__link" :to="{ name: 'schedule' }">Расписание</router-link>
        </li>
        <li class="navb__item">
          <router-link class="navb__item navb__link" :to="{ name: 'contacts' }">Контакты</router-link>
        </li>
        <li class="navb__item">
          <router-link class="navb__item navb__link" :to="{ name: 'signin' }">Вход</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '@/assets/scss/navbar.scss';
</style>
