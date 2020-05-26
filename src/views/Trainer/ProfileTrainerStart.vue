<template>
  <div>
    <NavbarBase />
    <div class="body-block">
      <LeftsidebarUser />
      <RightsidebarUser />
    </div>
    <!--<AboutServcomp />-->
    <!--<FooterBase />-->
  </div>
</template>

<script>
import NavbarBase from '@/components/NavbarBase.vue'
//import FooterBase from '@/components/FooterBase.vue'
import LeftsidebarUser from '@/components/LeftsidebarUser.vue'
import RightsidebarUser from '@/components/RightsidebarUser.vue'
//import AboutServcomp from '@/components/AboutServcomp.vue'
export default {
  components: {
    NavbarBase,
    // FooterBase,
    //AboutServcomp,
    LeftsidebarUser,
    RightsidebarUser
  }
}
</script>

<style lang="scss" scoped></style>
