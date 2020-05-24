<template>
<body class>
  <ModalInfo
    :showCloseCross="true"
    :showActionButton="false"
    :showCloseButton="false"
    @close="onClose"
  >
    <span slot="header" class="form-modal__heading">ПОДТВЕРЖДЕНИЕ РЕГИСТРАЦИИ</span>
    <div class slot="body">
      <div class="form-modal__text-block">
        <p class="form-modal__text">
          “Поздравляем! Вы успешно зарегистрированы в приложении
          “Fitness-online”. Вашу учетную запись необходимо активировать, для
          этого перейдите по ссылке указанной в письме”
        </p>
      </div>
      <button type="submit" class="btn header__btn-large" @click="onClose">ГОТОВО</button>
    </div>
  </ModalInfo>
</body>
</template>

<script>
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
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/registers.scss';
</style>
