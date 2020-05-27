<template>
  <div>
    <h2 class="page__heading text__heading_size_l">Настройки профиля</h2>
    <div>
      <form @submit.prevent="sendFile" enctype="multipart/form-data">
        <input type="file" ref="file" width="146" height="146" @change="selectFile" />
        <button>Send</button>
      </form>
    </div>
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
      imageLink: ''
    }
  },
  methods: {
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
  },
  created() {
    AuthorizationService.userInfo(this.id).then(response => {
      let serverInfoUser = response.data['0']
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
