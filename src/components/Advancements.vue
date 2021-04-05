<template>
  <section class="page__block page__block-height">
    <h2 class="page__heading text__heading_size_l">
      Дипломы, сертификаты и награды
    </h2>
    <section class="add-img__block">
      <div
        class="add-img"
        v-for="advancement in advancements"
        :key="advancement.achievement_id"
      >
        <img
          class="add-img__img"
          :src="advancement.attachment_ul"
          width="189"
          alt="advancement"
        />
      </div>
      <div class="add-img" @click="showModalAddadvancement = true">
        <div class="btn-add-img">
          <img
            class="btn-add-img__img"
            src="../assets/img/plus.svg"
            alt="add new advancement"
            width="78"
            height="78"
          />
        </div>
      </div>
    </section>

    <ModalInfo
      :showCloseCross="true"
      @close="showModalAddadvancement = false"
      v-show="showModalAddadvancement"
    >
      <span slot="header" class="form-modal-info__heading text__heading_size_l"
        >Добавить новый сертификат</span
      >
      <div class slot="body">
        <Imageinput v-model="imageData" />

        <p class="form-modal-info__textp">Описание</p>
        <textarea
          class="form-modal-info__textarea text__heading_size_m"
          placeholder="Добавить описание"
          rows="7"
        ></textarea>
        <div class="btn-block__modal">
          <button
            class="btn__title btn__title_color_transp-orange text__heading_size_h3"
            @click="showModalAddadvancement = !showModalAddadvancement"
          >
            Отмена
          </button>
          <button
            class="btn__title btn__title_color_orangeb text__heading_size_h3"
            @click="showModalAddadvancement = !showModalAddadvancement"
          >
            Сохранить
          </button>
        </div>
      </div>
    </ModalInfo>
  </section>
</template>

<script>
import AuthorizationService from '@/services/AuthorizationService.js'
import ModalInfo from '@/components/ModalInfo.vue'
import Imageinput from '@/components/Imageinput.vue'

export default {
  components: {
    ModalInfo,
    Imageinput
  },
  data() {
    return {
      imageData: null,
      showModalAddadvancement: false,
      advancements: [
        {
          achievement_id: 1,
          name: 'Великий турникмен',
          description: 'Сертификат о прохождении',
          attachment_id: 'b268398ba9ab4a8bbeb7ebb54def38491edbc753',
          attachment_ul: `http://80.89.238.253:5000/media/files/b268398ba9ab4a8bbeb7ebb54def38491edbc753?token=${localStorage.token}
    `
        },
        {
          achievement_id: 2,
          name: 'Великий турникмен',
          description: 'Сертификат о прохождении',
          attachment_id: 'b268398ba9ab4a8bbeb7ebb54def38491edbc753',
          attachment_ul: `http://80.89.238.253:5000/media/files/b268398ba9ab4a8bbeb7ebb54def38491edbc753?token=${localStorage.token}
    `
        },
        {
          achievement_id: 3,
          name: 'Великий турникмен',
          description: 'Сертификат о прохождении',
          attachment_id: 'b268398ba9ab4a8bbeb7ebb54def38491edbc753',
          attachment_ul: `http://80.89.238.253:5000/media/files/b268398ba9ab4a8bbeb7ebb54def38491edbc753?token=${localStorage.token}
    `
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
