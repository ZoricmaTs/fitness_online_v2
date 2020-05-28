<template>
  <div>
    <h2 class="page__heading text__heading_size_l">Настройки профиля</h2>
    <form @submit.prevent="sendFile" enctype="multipart/form-data">
      <input type="file" ref="file" width="146" height="146" @change="selectFile" />
      <button>Send</button>
    </form>
    <h3 class="page__heading-min text__heading_size_h3">Основное</h3>
    <section class="page__wrapper">
      <span class="page__body text__heading_size_m">Имя</span>
      <span class="page__body text__heading_size_m">{{ infoUser.first_name }}</span>
      <span
        class="page__link"
        @click="showEditFirstName = !showEditFirstName"
      >{{ showEditFirstName ? 'Отмена' : 'Изменить' }}</span>

      <span v-show="showEditFirstName" class="page__body text__heading_size_m">Новое имя</span>
      <input
        v-show="showEditFirstName"
        type="text"
        name="new_first_name"
        placeholder
        class="text__heading_size_m"
        required
      />
      <button
        v-show="showEditFirstName"
        class="btn__min btn__title_color_orangew text__heading_size_m"
      >Сохранить</button>

      <span class="page__body text__heading_size_m">E-mail</span>
      <span class="page__body text__heading_size_m">{{ infoUser.email }}</span>
      <span class="page__link" @click="showEditEmail = !showEditEmail">
        {{
        showEditEmail ? 'Отмена' : 'Изменить'
        }}
      </span>

      <span v-show="showEditEmail" class="page__body text__heading_size_m">Новый email</span>
      <input
        v-show="showEditEmail"
        type="email"
        name="new_email"
        placeholder
        class="text__heading_size_m"
        required
      />
      <button
        v-show="showEditEmail"
        class="btn__min btn__title_color_orangew text__heading_size_m"
      >Сохранить</button>

      <span class="page__body text__heading_size_m">Пароль</span>
      <span class="page__body text__heading_size_m">{{ infoUser.email }}</span>
      <span
        class="page__link"
        @click="showEditPassword = !showEditPassword"
      >{{ showEditPassword ? 'Отмена' : 'Изменить' }}</span>

      <span v-show="showEditPassword" class="page__body text__heading_size_m">Старый пароль</span>
      <input
        v-show="showEditPassword"
        type="password"
        name="current_password"
        placeholder
        class="text__heading_size_m"
      />
      <span v-show="showEditPassword"></span>

      <span v-show="showEditPassword" class="page__body text__heading_size_m">Новый пароль</span>
      <input
        v-show="showEditPassword"
        type="password"
        name="new_password"
        placeholder
        class="text__heading_size_m"
      />
      <span v-show="showEditPassword"></span>

      <span v-show="showEditPassword" class="page__body text__heading_size_m">Повторите пароль</span>
      <input
        v-show="showEditPassword"
        type="password"
        name="new_password_confirmation"
        placeholder
        class="text__heading_size_m"
      />
      <button
        v-show="showEditPassword"
        class="btn__min btn__title_color_orangew text__heading_size_m"
      >Сохранить</button>

      <span class="page__body text__heading_size_m">О себе</span>
      <span class="page__body text__heading_size_m">
        {{
        infoUser.about_me
        }}
      </span>
      <span
        class="page__link"
        @click="showEditAboutMe = !showEditAboutMe"
      >{{ showEditAboutMe ? 'Отмена' : 'Изменить' }}</span>
      <span v-show="showEditAboutMe"></span>
      <textarea v-show="showEditAboutMe" name="new_about_me" class="text__heading_size_m" rows="7"></textarea>
      <button
        v-show="showEditAboutMe"
        class="btn__min btn__title_color_orangew text__heading_size_m"
      >Сохранить</button>
    </section>
  </div>
</template>

<script>
import AuthorizationService from '@/services/AuthorizationService.js'
import axios from 'axios'
export default {
  props: ['id'],
  data() {
    return {
      file: '',
      comment: '',
      imageLink: '',
      infoUser: {},
      showEditFirstName: false,
      showEditEmail: false,
      showEditPassword: false,
      showEditAboutMe: false
      // new_first_name,
      // new_email,
      // current_password,
      // new_password,
      // new_password_confirmation,
      // new_role,
      // new_about_me,
      // new_profile_photo_id
    }
  },
  methods: {
    showEditSetting(visible) {
      this.showEditFirstName = visible
    },
    //загрузка файла на сервер--------
    selectFile() {
      this.file = this.$refs.file.files[0]
    },
    async sendFile() {
      const apiClientPut = axios.create({
        baseURL: 'http://80.89.238.253:5000',
        withCredentials: false,
        headers: {
          'Content-Type': 'multipart/form-data' //,
        }
      })
      const formData = new FormData()
      formData.set('file', this.file)
      formData.set('comment', this.comment)
      const token = localStorage.token

      apiClientPut
        .put(`/media/upload_file?token=${token}`, formData)
        .then(response => {
          if (response.data.success == true) {
          }
        })
        .catch(err => {})
    }
    //------------------------------------------
    // userInfoСhange() {
    //   AuthorizationService.userInfoNew(
    //     this.new_first_name,
    //     this.new_email,
    //     this.current_password,
    //     this.new_password,
    //     this.new_password_confirmation,
    //     this.new_role,
    //     this.new_about_me,
    //     this.new_profile_photo_id
    //   ).then(response => {

    //   })
    // }
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
    })
  }
}
</script>

<style lang="scss"></style>
