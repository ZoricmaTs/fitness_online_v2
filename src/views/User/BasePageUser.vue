<template>
  <div>
    <NavbarBaseUser />
    <div class="layout">
      <div class="column">
        <LeftsidebarUser />
      </div>

      <div class="content">
        <slot>default text</slot>
        <footer class="foo">
          <FooterBase />
        </footer>
      </div>

      <div class="column">
        <RightsidebarUser />
      </div>
    </div>
  </div>
</template>

<script>
import NavbarBaseUser from '@/components/NavbarBaseUser.vue'
import LeftsidebarUser from '@/components/LeftsidebarUser.vue'
import RightsidebarUser from '@/components/RightsidebarUser.vue'
import FooterBase from '@/components/FooterBase.vue'

export default {
  components: {
    NavbarBaseUser,
    LeftsidebarUser,
    RightsidebarUser,
    FooterBase
  }
}
</script>

<style>
.layout {
  display: flex;
  flex-direction: row;
  position: relative;
}

.content {
  flex-grow: 1;
}

.column {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;
  height: 100vh;
}
.foo {
  left: 0;
  bottom: -1px;
  width: 100%;
  position: absolute;
  z-index: 6;
  background-color: chartreuse;
  border-bottom: 1px solid #eff2f1;
}
</style>
