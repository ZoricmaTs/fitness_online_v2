<template>
  <div>
    <BasePageUser>
      <ContactDetailcomp />
    </BasePageUser>
  </div>
</template>
<script>
import ContactDetailcomp from '@/components/ContactDetailcomp.vue'
import BasePageUser from '@/views/User/BasePageUser.vue'
export default {
  components: {
    ContactDetailcomp,
    BasePageUser
  }
}
</script>

<style lang="scss"></style>
