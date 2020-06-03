<template>
  <div class="bg-color">
    <BasePageUser>
      <Questionscomp />
    </BasePageUser>
  </div>
</template>
<script>
import BasePageUser from '@/views/User/BasePageUser.vue'
import Questionscomp from '@/components/Questionscomp.vue'
export default {
  components: {
    BasePageUser,
    Questionscomp
  }
}
</script>

<style lang="scss"></style>
