<template>
  <div>
    <h3 class="page__heading-min text__heading_size_h3">Направления</h3>
    <label
      class="check option-check"
      v-for="trainingType in trainingTypes"
      :key="trainingType.training_type_id"
    >
      <input class="check__input" type="checkbox" />
      <span class="check__box"></span>
      <div class="check__text">
        <span class="check__text-body text__heading_size_m">{{
          trainingType.name
        }}</span>
      </div>
    </label>
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
      alert(responce.data)
      this.trainingTypes = responce.data
    })
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/registers.scss';
</style>
