<template>
  <div class="page__block">
    <h2 class="page__heading text__heading_size_l">Настройки профиля</h2>
    <form @submit.prevent="sendFile" enctype="multipart/form-data">
      <input
        type="file"
        ref="file"
        width="146"
        height="146"
        @change="selectFile"
      />
      <button>Send</button>
    </form>
    <h3 class="page__heading-min text__heading_size_h3">Основное</h3>
    <section class="page__wrapper">
      <span class="page__body text__heading_size_m">Имя</span>
      <span class="page__body text__heading_size_m">{{
        infoUser.first_name
      }}</span>
      <span
        class="page__link"
        @click="showEditFirstName = !showEditFirstName"
        >{{ showEditFirstName ? 'Отмена' : 'Изменить' }}</span
      >

      <span v-show="showEditFirstName" class="page__body text__heading_size_m"
        >Новое имя</span
      >
      <input
        v-show="showEditFirstName"
        v-model="new_first_name"
        type="text"
        name="new_first_name"
        placeholder
        class="text__heading_size_m page__input"
        required
      />
      <button
        v-show="showEditFirstName"
        class="btn__min btn__title_color_orangew text__heading_size_m"
        @click="saveFirstName"
      >
        Сохранить
      </button>

      <span class="page__body text__heading_size_m">E-mail</span>
      <span class="page__body text__heading_size_m">{{ infoUser.email }}</span>
      <span class="page__link" @click="showEditEmail = !showEditEmail">
        {{ showEditEmail ? 'Отмена' : 'Изменить' }}
      </span>

      <span v-show="showEditEmail" class="page__body text__heading_size_m"
        >Новый email</span
      >
      <input
        v-show="showEditEmail"
        v-model="new_email"
        type="email"
        name="new_email"
        placeholder
        class="text__heading_size_m page__input"
        required
      />
      <button
        v-show="showEditEmail"
        class="btn__min btn__title_color_orangew text__heading_size_m"
        @click="saveEmail"
      >
        Сохранить
      </button>

      <span class="page__body text__heading_size_m">Пароль</span>
      <span class="page__body text__heading_size_m">******</span>
      <span class="page__link" @click="showEditPassword = !showEditPassword">{{
        showEditPassword ? 'Отмена' : 'Изменить'
      }}</span>

      <span v-show="showEditPassword" class="page__body text__heading_size_m"
        >Старый пароль</span
      >
      <span>
        <span
          class="singup__err text__heading_size_m"
          v-show="showEditPassword"
          >{{ errArray['current_password'] }}</span
        >
        <input
          v-show="showEditPassword"
          type="password"
          name="current_password"
          placeholder
          class="text__heading_size_m page__input"
        />
      </span>
      <span v-show="showEditPassword">&nbsp;</span>

      <span v-show="showEditPassword" class="page__body text__heading_size_m"
        >Новый пароль</span
      >
      <input
        v-show="showEditPassword"
        type="password"
        name="new_password"
        placeholder
        class="text__heading_size_m page__input"
      />
      <span v-show="showEditPassword">&nbsp;</span>

      <span v-show="showEditPassword" class="page__body text__heading_size_m"
        >Повторите пароль</span
      >
      <input
        v-show="showEditPassword"
        type="password"
        name="new_password_confirmation"
        placeholder
        class="text__heading_size_m page__input"
      />
      <button
        v-show="showEditPassword"
        class="btn__min btn__title_color_orangew text__heading_size_m"
        @click="savePassword"
      >
        Сохранить
      </button>

      <span class="page__body text__heading_size_m">О себе</span>
      <span class="page__body text__heading_size_m">
        {{ infoUser.about_me }}
      </span>
      <span class="page__link" @click="showEditAboutMe = !showEditAboutMe">{{
        showEditAboutMe ? 'Отмена' : 'Изменить'
      }}</span>

      <span v-show="showEditAboutMe">&nbsp;</span>
      <textarea
        v-show="showEditAboutMe"
        name="new_about_me"
        class="text__heading_size_m"
        rows="7"
      ></textarea>
      <button
        v-show="showEditAboutMe"
        class="btn__min btn__title_color_orangew text__heading_size_m"
        @click="saveAboutMe"
      >
        Сохранить
      </button>
    </section>
  </div>
</template>

<script>
import AuthorizationService from '@/services/AuthorizationService.js'

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
      showEditAboutMe: false,
      new_first_name: '',
      new_email: '',
      current_password: '',
      new_password: '',
      new_password_confirmation: '',
      new_role: '',
      new_about_me: '',
      new_profile_photo_id: '',
      errArray: {}
    }
  },
  methods: {
    saveFirstName() {
      this.infoUser.first_name = this.new_first_name
      this.showEditFirstName = false
    },
    saveEmail() {
      this.infoUser.email = this.new_email
      this.showEditEmail = false
    },
    savePassword() {
      let hasErr = false
      if (this.current_password == '') {
        this.errArray['current_password'] = 'введите старый пароль'
        hasErr = true
      }
      if (this.new_password == '') {
        this.errArray['new_password'] = 'введите  пароль'
        hasErr = true
      }
      if (this.new_password_confirmation == '') {
        this.errArray['new_password_confirmation'] = 'введите  повторите пароль'
        hasErr = true
      }
      if (this.new_password_confirmation != this.new_password) {
        this.errArray['new_password_confirmation'] = 'Пароли не совпадают'
        hasErr = true
      }

      if (hasErr == false) {
        this.showEditPassword = false
      }
    },
    saveAboutMe() {
      this.infoUser.about_me = this.new_about_me
      this.showEditAboutMe = false
    },
    showEditSetting(visible) {
      this.showEditFirstName = visible
    },
    //загрузка файла на сервер--------
    selectFile() {
      this.file = this.$refs.file.files[0]
    },
    sendFile() {
      AuthorizationService.sendFileMedia(this.file, this.comment)
        .then(response => {
          if (response.data.success == true) {
          }
        })
        .catch(err => {})
    },
    //------------------------------------------
    userInfoСhange() {
      if (this.current_password == '') {
        this.showEditPassword = true
        this.errArray = { current_password: ['Введите текущий пароль'] }
        return
      }
      AuthorizationService.userInfoNew(
        this.new_first_name,
        this.new_email,
        this.current_password,
        this.new_password,
        this.new_password_confirmation,
        this.new_role,
        this.new_about_me,
        this.new_profile_photo_id
      ).then(response => {})
    }
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
