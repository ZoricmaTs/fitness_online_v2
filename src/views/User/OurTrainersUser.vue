<template>
  <div class="bg-color">
    <BasePageUser>
      <OurTrainerCard />
    </BasePageUser>
  </div>
</template>
<script>
import BasePageUser from '@/views/User/BasePageUser.vue'
import OurTrainerCard from '@/components/OurTrainerCard.vue'
export default {
  components: {
    BasePageUser,
    OurTrainerCard
  }
}
</script>

<style lang="scss"></style>
