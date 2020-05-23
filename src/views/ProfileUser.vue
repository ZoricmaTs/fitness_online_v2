<template>
  <div>
    <NavbarBase />
    <div>
      <LeftsidebarUser />
      <div>dfsdfsdf</div>
      <div>sdfsdfsdf</div>
    </div>
    <FooterBase />
  </div>
</template>

<script>
import NavbarBase from '@/components/NavbarBase.vue'
import FooterBase from '@/components/FooterBase.vue'
import LeftsidebarUser from '@/components/LeftsidebarUser.vue'
export default {
  components: {
    NavbarBase,
    FooterBase,
    LeftsidebarUser
  }
}
</script>

<style lang="scss" scoped></style>
