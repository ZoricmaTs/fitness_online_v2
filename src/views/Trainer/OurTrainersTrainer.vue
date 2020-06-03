<template>
  <div class="bg-color">
    <BasePageTrainer>
      <OurTrainerCard />
    </BasePageTrainer>
  </div>
</template>
<script>
import OurTrainerCard from '@/components/OurTrainerCard.vue'
import BasePageTrainer from '@/views/Trainer/BasePageTrainer.vue'
export default {
  components: {
    OurTrainerCard,
    BasePageTrainer
  }
}
</script>

<style lang="scss"></style>
