<template>
<body class>
  <ModalInfo
    :showCloseCross="true"
    :showActionButton="false"
    :showCloseButton="false"
    @close="onClose"
    @click="onClose"
  >
    <span slot="header" class="form-modal-info__heading text__heading_size_h2">Поздравляем!</span>
    <div class slot="body">
      <div class="form-modal-info__text-block">
        <p
          class="form-modal-info__text text__heading_size_h2"
        >Вы успешно зарегистрированы в приложении “Fitness-online”</p>
      </div>
    </div>
  </ModalInfo>
</body>
</template>

<script>
import AuthorizationService from '@/services/AuthorizationService.js'
import ModalInfo from '@/components/ModalInfo.vue'

export default {
  components: {
    ModalInfo
  },
  data() {
    return {}
  },

  methods: {
    onClose() {
      if (localStorage.role == 'trainer') {
        this.$router.push({
          name: 'aboutserviceTrainer',
          params: { id: localStorage.user_id }
        })
      } else {
        this.$router.push({
          name: 'aboutserviceUser',
          params: { id: localStorage.user_id }
        })
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/registers.scss';
</style>
