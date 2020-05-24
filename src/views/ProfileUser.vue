<template>
  <div>
    <NavbarBase />
    <div class="row">
      <div class="col-sm-4 sticky">
        <LeftsidebarUser class="sticky-top">bar</LeftsidebarUser>
      </div>
      <div class="col-sm-8 scroll">
        <div>content kjhkh hjkhjkh jkh hjkhjkhhkhj hjkjhk</div>
      </div>
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
