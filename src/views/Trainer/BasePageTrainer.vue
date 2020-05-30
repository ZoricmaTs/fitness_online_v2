<template>
  <div>
    <NavbarBaseTrainer />
    <div class="layout">
      <div class="column">
        <LeftsidebarTrainer />
      </div>

      <div class="content">
        <slot>default text</slot>
      </div>

      <div class="column">
        <RightsidebarUser />
      </div>
    </div>
  </div>
</template>

<script>
import NavbarBaseTrainer from '@/components/NavbarBaseTrainer.vue'
import LeftsidebarTrainer from '@/components/LeftsidebarTrainer.vue'
import RightsidebarUser from '@/components/RightsidebarUser.vue'

export default {
  components: {
    NavbarBaseTrainer,
    LeftsidebarTrainer,
    RightsidebarUser
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
  /* flex-grow: 1; */
}

.column {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;
  height: 100vh;
}
/* .foo {
  left: 0;
  bottom: -1px;
  width: 100%;
  position: absolute;
  z-index: 6;
  background-color: chartreuse;
  border-bottom: 1px solid #eff2f1;
} */
</style>
