<template>
  <div>
    <NavbarBaseTrainer />
    <div class="body-block">
      <LeftsidebarTrainer />
      <RightsidebarUser />
    </div>
    <!--<AboutServcomp />-->
    <!--<FooterBase />-->
  </div>
</template>

<script>
import NavbarBaseTrainer from '@/components/NavbarBaseTrainer.vue'
//import FooterBase from '@/components/FooterBase.vue'
import LeftsidebarTrainer from '@/components/LeftsidebarTrainer.vue'
import RightsidebarUser from '@/components/RightsidebarUser.vue'
//import AboutServcomp from '@/components/AboutServcomp.vue'
export default {
  components: {
    NavbarBaseTrainer,
    // FooterBase,
    //AboutServcomp,
    LeftsidebarTrainer,
    RightsidebarUser
  }
}
</script>

<style lang="scss" scoped></style>
