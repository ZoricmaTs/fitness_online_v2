<template>
  <div>
    <BasePageUser>
      <AboutServcomp />
    </BasePageUser>
  </div>
</template>
<script>
import AboutServcomp from '@/components/AboutServcomp.vue'
import BasePageUser from '@/views/User/BasePageUser.vue'
export default {
  components: {
    AboutServcomp,
    BasePageUser
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/about-serv.scss';
@import '@/assets/scss/home-aboutserv.scss';
</style>
