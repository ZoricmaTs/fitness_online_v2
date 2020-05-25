<template>
  <div>
    <NavbarBase />
    <div class="body-block">
      <LeftsidebarUser />
      <AboutServcomp />
      <RightsidebarUser />
    </div>
  </div>
</template>
<script>
import NavbarBase from '@/components/NavbarBase.vue'
//import Footer from '@/components/Footer.vue'
import LeftsidebarUser from '@/components/LeftsidebarUser.vue'
import RightsidebarUser from '@/components/RightsidebarUser.vue'
import AboutServcomp from '@/components/AboutServcomp.vue'
export default {
  components: {
    NavbarBase,
    LeftsidebarUser,
    RightsidebarUser,
    AboutServcomp
  }
}
</script>

<style lang="scss">
@import '../assets/scss/about-serv.scss';
@import '../assets/scss/home-aboutserv.scss';
@import '../assets/scss/navbar.scss';
</style>
