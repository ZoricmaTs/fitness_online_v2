<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap'); //fitness
@import url('https://fonts.googleapis.com/css2?family=Jura:wght@400;500&display=swap'); //онлайн
@import '@/assets/scss/main.scss';
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/page-style.scss';
body {
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
}

* {
  margin: 0;
  padding: 0;
  //line-height: 0;
}
.block-grid {
  padding-left: 25px;
  padding-right: 25px;
}
.block-grid-min {
  padding-left: 238px;
  padding-right: 238px;
  background-color: $color-blue;
}
.bg-color {
  background-color: $color-blue;
  height: 100vh;
}
</style>
