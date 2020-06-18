<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&family=Nothing+You+Could+Do&display=swap');
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/page-style.scss';
@import '@/assets/scss/btn.scss';
@import '@/assets/scss/footer.scss';
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
  padding-left: 20px;
  padding-right: 20px;
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
