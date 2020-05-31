<template>
  <div class="page__block">
    <h2 class="page__heading text__heading_size_l">Настройки профиля</h2>
    <form @submit.prevent="sendFile" enctype="multipart/form-data">
      <input type="file" ref="file" width="146" height="146" @change="selectFile" />
      <div id="preview">
        <img v-if="imageUrl" :src="imageUrl" height="146" />
      </div>
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
      <span v-show="showEditFirstName">
        <span v-if="$v.new_first_name.$error" class="setting__err text__heading_size_s">
          <template v-if="!$v.new_first_name.minLength">
            Длина имени не должна быть менее
            {{ $v.new_first_name.$params.minLength.min }} символов
          </template>
          <template v-if="!$v.new_first_name.maxLength">Слишком длинное имя</template>
          <template
            v-else-if="!$v.new_first_name.alpha"
          >Имя должно содержать латинские или русские буквы.</template>
        </span>
        <input
          v-show="showEditFirstName"
          v-model="new_first_name"
          type="text"
          name="new_first_name"
          placeholder
          class="text__heading_size_m page__input"
          @blur="$v.new_first_name.$touch()"
        />
      </span>
      <button
        v-show="showEditFirstName"
        class="btn__min btn__title_color_orangew text__heading_size_m"
        @click="saveFirstName"
      >Сохранить</button>

      <span class="page__body text__heading_size_m">E-mail</span>
      <span class="page__body text__heading_size_m">{{ infoUser.email }}</span>
      <span class="page__link" @click="showEditEmail = !showEditEmail">
        {{
        showEditEmail ? 'Отмена' : 'Изменить'
        }}
      </span>

      <span v-show="showEditEmail" class="page__body text__heading_size_m">Новый email</span>
      <span v-show="showEditEmail">
        <span v-if="$v.new_email.$error" class="setting__err text__heading_size_s">
          <template v-if="!$v.new_email.minLength">
            Длина email не должна быть менее
            {{ $v.new_email.$params.minLength.min }} символов
          </template>
          <template v-if="!$v.new_email.maxLength">Слишком длинный E-mail</template>
          <template v-else-if="!$v.new_email.email">Некорректный email</template>
        </span>
        <input
          v-show="showEditEmail"
          v-model="new_email"
          type="email"
          name="new_email"
          placeholder
          class="text__heading_size_m page__input"
          @blur="$v.new_email.$touch()"
        />
      </span>
      <button
        v-show="showEditEmail"
        class="btn__min btn__title_color_orangew text__heading_size_m"
        @click="saveEmail"
      >Сохранить</button>
      <!--                           ////////////////////////////////////////password-->
      <span class="page__body text__heading_size_m">Пароль</span>
      <span class="page__body text__heading_size_m">******</span>
      <span
        class="page__link"
        @click="showEditPassword = !showEditPassword"
      >{{ showEditPassword ? 'Отмена' : 'Изменить' }}</span>

      <span v-show="showEditPassword" class="page__body text__heading_size_m">Старый пароль</span>
      <span v-show="showEditPassword">
        <input
          v-show="showEditPassword"
          type="password"
          name="current_password"
          class="text__heading_size_m page__input"
        />
      </span>
      <span v-show="showEditPassword">&nbsp;</span>
      <!--                           ////////////////////////////////////////password-->
      <span v-show="showEditPassword" class="page__body text__heading_size_m">Новый пароль</span>
      <span v-show="showEditPassword">
        <span v-if="$v.new_password.$error" class="setting__err text__heading_size_s">
          <template v-if="!$v.password.minLength">
            Длина пароля не должна быть менее
            {{ $v.new_password.$params.minLength.min }} символов
          </template>
          <template v-if="!$v.new_password.maxLength">Слишком длинный пароль</template>
        </span>
        <input
          v-show="showEditPassword"
          type="password"
          name="new_password"
          class="text__heading_size_m page__input"
          @blur="$v.new_password.$touch()"
        />
      </span>
      <span v-show="showEditPassword">&nbsp;</span>

      <span v-show="showEditPassword" class="page__body text__heading_size_m">Повторите пароль</span>
      <span v-show="showEditPassword">
        <span v-if="$v.new_password_confirmation.$error" class="setting__err text__heading_size_s">
          <template v-if="!$v.new_password_confirmation.sameAsPassword">Пароли должны совпадать</template>
        </span>
        <input
          v-show="showEditPassword"
          type="password"
          name="new_password_confirmation"
          class="text__heading_size_m page__input"
          @blur="$v.new_password_confirmation.$touch()"
        />
      </span>
      <button
        v-show="showEditPassword"
        class="btn__min btn__title_color_orangew text__heading_size_m"
        @click="savePassword"
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

      <span v-show="showEditAboutMe">&nbsp;</span>
      <textarea v-show="showEditAboutMe" name="new_about_me" class="text__heading_size_m" rows="7"></textarea>
      <button
        v-show="showEditAboutMe"
        class="btn__min btn__title_color_orangew text__heading_size_m"
        @click="saveAboutMe"
      >Сохранить</button>
    </section>
  </div>
</template>

<script>
import AuthorizationService from '@/services/AuthorizationService.js'
import {
  required,
  maxLength,
  minLength,
  sameAs,
  email
} from 'vuelidate/lib/validators'
import moment from 'moment'
export default {
  props: ['id'],
  data() {
    return {
      file: '',
      imageUrl: '',
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
  validations: {
    new_first_name: {
      minLength: minLength(2),
      maxLength: maxLength(60),
      alpha: val => /^[a-zа-яё'\s\-]*$/i.test(val)
    },
    new_email: {
      email,
      minLength: minLength(6),
      maxLength: maxLength(255)
    },
    new_password: {
      minLength: minLength(8),
      maxLength: maxLength(32)
    },
    new_password_confirmation: {
      sameAsPassword: sameAs('password')
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
      this.showEditPassword = false
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
      if (this.$refs.file.files.length > 0) {
        this.file = this.$refs.file.files[0]
        this.imageUrl = URL.createObjectURL(this.file)
      }
    },
    sendFile() {
      AuthorizationService.sendFileMedia(this.file, this.comment)
        .then(response => {
          if (response.data.success == true) {
            console.log(response.data)
            this.infoUser.profile_photo_file_id = response.data.id
            this.imageUrl = `http://80.89.238.253:5000/media/files/${infoUser.profile_photo_file_id}?token=${localStorage.token}`
          }
        })
        .catch(err => {})

      if (this.infoUser.profile_photo_file_id != '') {
        AuthorizationService.saveProfilePhoto(
          localStorage.user_id,
          this.infoUser.profile_photo_file_id, //заплатка
          this.infoUser.first_name,
          this.infoUser.about_me,
          this.infoUser.role
        ).then(resp => {
          alert('фотка загружена')
        })
      }
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
      // alert(serverInfoUser.profile_photo_file_id)
      this.infoUser.profile_photo_file_id =
        '4e6f3a40b1d64aecde30d46c781f1bebb865bfec'
      if (this.infoUser.profile_photo_file_id != '') {
        this.imageUrl = `http://80.89.238.253:5000/media/files/${this.infoUser.profile_photo_file_id}?token=${localStorage.token}`
      }
    })
  }
}
</script>

<style lang="scss"></style>
