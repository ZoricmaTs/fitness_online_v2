<template>
  <div>
    <BasePage>   
      <AboutServcomp />
     </BasePage>
  </div>
</template>
<script>


import AboutServcomp from '@/components/AboutServcomp.vue'
import BasePage from "@/views/User/BasePage.vue";
export default {
  components: {  
    AboutServcomp,
    BasePage
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/about-serv.scss';
@import '@/assets/scss/home-aboutserv.scss';
</style>
