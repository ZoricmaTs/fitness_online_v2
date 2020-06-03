<template>
  <div class="page__block-lr">
    <h3 class="page__heading-min text__heading_size_h3">Направления</h3>
    <div class="page__labelcheck">
      <label class="check option-check" v-for="item in trainingTypes" :key="item.training_type_id">
        <input
          class="check__input"
          :id="item.training_type_id"
          type="checkbox"
          v-model="item.checked"
        />
        <span class="check__box-training"></span>
        <div class="check__text">
          <label :for="item.training_type_id" class="check__text-body_color_gray">{{ item.name }}</label>
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
      trainingTypes: [],
      userTrainingTypes: []
    }
  },
  methods: {
    setCheckbox() {}
  },
  created() {
    AuthorizationService.userInfo(
      localStorage.user_id,
      localStorage.token
    ).then(response => {
      let serverInfoUser = response.data
      this.userTrainingTypes = serverInfoUser.training_types

      AuthorizationService.getTrainingTypes().then(responce => {
        var training_types = []
        var alltrainingTypes = responce.data
        alltrainingTypes.forEach(element => {
          if (
            this.userTrainingTypes.find(
              o => o.training_type_id == element.training_type_id
            )
          ) {
            element.checked = true
            training_types.push(element)
          } else {
            element.checked = false
            training_types.push(element)
          }
        })
        this.trainingTypes = training_types
      })
    })
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/registers.scss';
</style>
