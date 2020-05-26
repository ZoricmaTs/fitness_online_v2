<template>
  <div>
    <NavbarBase />
    <div class="layout">
      <div class="column">
        <LeftsidebarUser />
      </div>

      <div class="content">
        <slot>
          default text
        </slot>
      </div>

      <div class="column">
        <RightsidebarUser />
      </div>
    </div>
    <footer class="foo">
      <FooterBase />
    </footer>
  </div>
</template>

<script>
import NavbarBase from '@/components/NavbarBase.vue'
import LeftsidebarUser from '@/components/LeftsidebarUser.vue'
import RightsidebarUser from '@/components/RightsidebarUser.vue'
import FooterBase from '@/components/FooterBase.vue'

export default {
  components: {
    NavbarBase,
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
  height: 50px;
  background-color: blueviolet;
}
</style>
