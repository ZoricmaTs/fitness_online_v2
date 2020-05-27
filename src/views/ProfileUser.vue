<template>
  <div>
    <NavbarBaseUser />
    <div class="body-block">
      <LeftsidebarUser />
      <RightsidebarUser />
    </div>
    <div>content kjhkh hjkhjkh jkh hjkhjkhhkhj hjkjhk</div>
    <!--<FooterBase />-->
  </div>
</template>

<script>
import NavbarBaseUser from '@/components/NavbarBaseUser.vue'
//import FooterBase from '@/components/FooterBase.vue'
import LeftsidebarUser from '@/components/LeftsidebarUser.vue'
import RightsidebarUser from '@/components/RightsidebarUser.vue'
export default {
  components: {
    NavbarBase,
    // FooterBase,
    LeftsidebarUser,
    RightsidebarUser
  }
}
</script>

<style lang="scss" scoped></style>
