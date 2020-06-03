<template>
  <div class="bg-color">
    <BasePageTrainer>
      <Questionscomp />
    </BasePageTrainer>
  </div>
</template>
<script>
import Questionscomp from '@/components/Questionscomp.vue'
import BasePageTrainer from '@/views/Trainer/BasePageTrainer.vue'
export default {
  components: {
    Questionscomp,
    BasePageTrainer
  }
}
</script>

<style lang="scss"></style>
