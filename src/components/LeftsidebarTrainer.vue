<template>
  <div class="left-sidebar">
    <div class="left-sidebar__time">
      <div class="left-sidebar__time-hour text__heading_size_h2">12:35</div>
      <div class="left-sidebar__time-day text__heading_size_h2">12.05.2020</div>
    </div>
    <section class="left-sidebar__menu">
      <router-link class="left-sidebar__menu-link" :to="{ name: 'advancements' }">
        <div class="left-sidebar__menu-item text__heading_size_h3">Достижения</div>
      </router-link>

      <div class="left-sidebar__menu-item text__heading_size_h3">Календарь тренировок</div>
      <div class="left-sidebar__menu-item text__heading_size_h3">Записи тренировок</div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '@/assets/scss/left-sidebar.scss';
</style>
