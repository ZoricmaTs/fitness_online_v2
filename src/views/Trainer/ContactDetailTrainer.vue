<template>
  <div class="bg-color">
    <BasePageTrainer>
      <ContactDetailcomp />
    </BasePageTrainer>
  </div>
</template>
<script>
import ContactDetailcomp from '@/components/ContactDetailcomp.vue'
import BasePageTrainer from '@/views/Trainer/BasePageTrainer.vue'
export default {
  components: {
    ContactDetailcomp,
    BasePageTrainer
  }
}
</script>

<style lang="scss"></style>
