<template>
  <div>
    <BasePageTrainer>
      <AboutServcomp />
    </BasePageTrainer>
  </div>
</template>
<script>
import AboutServcomp from '@/components/AboutServcomp.vue'
import BasePageTrainer from '@/views/Trainer/BasePageTrainer.vue'
export default {
  components: {
    AboutServcomp,
    BasePageTrainer
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/about-serv.scss';
@import '@/assets/scss/home-aboutserv.scss';
</style>
