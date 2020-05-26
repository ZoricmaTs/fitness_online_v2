<template>
  <div>
    <NavbarBase />
    <div class="layout">
      <LeftsidebarUser />
      <slot>
        default text
      </slot>
      <RightsidebarUser />
    </div>
  </div>
</template>

<script>
import NavbarBase from '@/components/NavbarBase.vue'
import LeftsidebarUser from '@/components/LeftsidebarUser.vue'
import RightsidebarUser from '@/components/RightsidebarUser.vue'

export default {
  components: {
    NavbarBase,
    LeftsidebarUser,
    RightsidebarUser
  }
}
</script>

<style>
.layout {
  display: flex;
  flex-direction: row;
}
</style>
