<template>
  <div class="page__block-lr">
    <h3 class="page__heading-min text__heading_size_h3">Направления</h3>
    <div class="page__labelcheck">
      <label
        class="check option-check "
        v-for="trainingType in trainingTypes"
        :key="trainingType.training_type_id"
      >
        <input class="check__input" type="checkbox" />
        <span class="check__box-training"></span>
        <div class="check__text">
          <span class="check__text-body_color_gray">{{
            trainingType.name
          }}</span>
        </div>
      </label>
    </div>
  </div>
</template>

<script>
import AuthorizationService from '@/services/AuthorizationService.js'
export default {
  data() {
    return {
      trainingTypes: []
    }
  },
  created() {
    AuthorizationService.getTrainingTypes().then(responce => {
      this.trainingTypes = responce.data
    })
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/registers.scss';
</style>
