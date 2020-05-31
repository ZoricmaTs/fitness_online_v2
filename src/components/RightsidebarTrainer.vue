<template>
  <div class="right-sidebar">
    <ul class="right-sidebar__menu">
      <li class="right-sidebar__menu-item text__heading_size_m">
        <router-link class="navb__link" :to="{ name: 'settingTrainer' }">
          <img
            class="right-sidebar__img"
            src="../assets/img/gear.svg"
            alt="settings"
            width="20"
            height="20"
          />
        </router-link>
        <span class="right-sidebar__numb text__heading_size_m"></span>
      </li>
      <li class="right-sidebar__menu-item text__heading_size_m">
        <img
          class="right-sidebar__img"
          src="../assets/img/bell.svg"
          alt="notice"
          width="20"
          height="20"
        />
      </li>
      <li class="right-sidebar__menu-item text__heading_size_m">
        <img
          class="right-sidebar__img"
          src="../assets/img/diet.svg"
          alt="exercises"
          width="20"
          height="20"
        />
        <span class="right-sidebar__numb exercises__numb text__heading_size_m">5</span>
      </li>
      <li class="right-sidebar__menu-item text__heading_size_m">
        <img
          class="right-sidebar__img"
          src="../assets/img/sms.svg"
          alt="message"
          width="20"
          height="20"
        />
        <span class="right-sidebar__numb message__numb text__heading_size_m"></span>
      </li>
    </ul>
    <div class="right-sidebar__about">
      <img
        class="right-sidebar__avatar"
        src="../assets/img/avatar.png"
        alt="message"
        width="146"
        height="146"
      />
      <h2 class="right-sidebar__first-name text__heading_size_h2">Марк</h2>
      <p class="right-sidebar__heading">О себе</p>
      <p class="right-sidebar__body text__heading_size_s">
        Тест интегрирует коллективный объект. Инсайт, в представлении Морено,
        неизменяем. Сознание конфронтально притягивает социальный эгоцентризм.
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '@/assets/scss/right-sidebar.scss';
</style>
