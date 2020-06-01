<template>
  <body class>
    <ModalInfo
      :showCloseCross="true"
      :showActionButton="false"
      :showCloseButton="false"
      @close="onClose"
      @click="onClose"
    >
      <span slot="header" class="form-modal-info__heading text__heading_size_h2"
        >Добавить новый сертификат</span
      >
      <div class slot="body">
        <div class="btn-add-img-modal">
          <img
            class="btn-add-img-modal__img"
            src="../assets/img/plus.svg"
            alt="add new advancement"
            width="78"
            height="78"
          />
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
