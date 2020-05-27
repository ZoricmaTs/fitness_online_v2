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
import axios from 'axios'
export default {
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
  }
}
</script>

<style lang="scss"></style>
