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
      <!--<button type="submit" class="form-modal-info__btn" @click="onClose">ГОТОВО</button>-->
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
@import '@/assets/scss/registers.scss';
</style>
