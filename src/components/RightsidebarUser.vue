<template>
  <div class="right-sidebar">
    <div class="right-sidebar__menu">
      <div>
        <div class="right-sidebar__menu-item text__heading_size_m">
          <img
            class="right-sidebar__img"
            src="../assets/img/diet.svg"
            alt="exercises"
            width="20"
            height="20"
          />
          <span class="right-sidebar__numb exercises__numb text__heading_size_m">5</span>
        </div>
        <div class="right-sidebar__menu-item text__heading_size_m">
          <img
            class="right-sidebar__img"
            src="../assets/img/sms.svg"
            alt="message"
            width="20"
            height="20"
          />
          <span class="right-sidebar__numb message__numb text__heading_size_m"></span>
        </div>
      </div>
      <div>
        <div class="right-sidebar__menu-item text__heading_size_m">
          <router-link class="navb__link" :to="{ name: 'settingUser' }">
            <img
              class="right-sidebar__img"
              src="../assets/img/gear.svg"
              alt="settings"
              width="20"
              height="20"
            />
          </router-link>
          <span class="right-sidebar__numb text__heading_size_m"></span>
        </div>
        <div class="right-sidebar__menu-item text__heading_size_m">
          <img
            class="right-sidebar__img"
            src="../assets/img/bell.svg"
            alt="notice"
            width="20"
            height="20"
          />
        </div>
      </div>
    </div>
    <div class="right-sidebar__about">
      <img class="right-sidebar__avatar" :src="imageUrl" alt="message" width="146" height="146" />
      <h2 class="right-sidebar__first-name text__heading_size_h2">{{ infoUser.first_name }}</h2>
      <p class="right-sidebar__heading">О себе</p>
      <p class="right-sidebar__body text__heading_size_s">{{ infoUser.about_me }}</p>
    </div>
  </div>
</template>

<script>
import AuthorizationService from '@/services/AuthorizationService.js'
export default {
  data() {
    return { infoUser: {}, imageUrl: '' }
  },
  created() {
    AuthorizationService.userInfo(
      localStorage.user_id,
      localStorage.token
    ).then(response => {
      let serverInfoUser = response.data
      this.infoUser = {
        about_me: serverInfoUser.about_me,
        achievements_ids: serverInfoUser.achievements_ids, //[], достижения массив
        confirmation_time: serverInfoUser.confirmation_time,
        email: serverInfoUser.email,
        first_name: serverInfoUser.first_name,
        is_confirmed: serverInfoUser.is_confirmed, //true, подтвержден или нет
        is_deleted: serverInfoUser.is_deleted, //false, удален ли аккаунт
        profile_photo_file_id: serverInfoUser.profile_photo_file_id, //null, аватарка
        registration_time: serverInfoUser.registration_time, //' время регистрации
        role: serverInfoUser.role, //'user', прописать юзера??
        training_types_ids: serverInfoUser.training_types_ids, ///[], тренировки
        user_id: serverInfoUser.user_id
      }
      // alert(serverInfoUser.profile_photo_file_id)
      // this.infoUser.profile_photo_file_id =
      //   'b268398ba9ab4a8bbeb7ebb54def38491edbc753'
      if (this.infoUser.profile_photo_file_id != '') {
        this.imageUrl = `http://80.89.238.253:5000/media/files/${this.infoUser.profile_photo_file_id}?token=${localStorage.token}`
      }
    })
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/right-sidebar.scss';
</style>
