<template>
  <div>
    <h2 class="page__heading text__heading_size_l">Настройки профиля</h2>
    <div>
      <!-- <form enctype="multipart/form-data">
        <input
          type="file"
          id="file"
          accept=".jpg, .jpeg, .png"
          width="146"
          height="146"
          @change="handleFileUpload()"
          ref="file"
        />

        <img v-bind::src="image" />
        <button @click="submitFile()">Изменить</button>
      </form>-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: ''
    }
  },
  methods: {
    // submitFile() {
    //   let formData = new FormData()
    //   formData.append('file', this.file)
    //   axios
    //     .post('/single-file', formData, {
    //       headers: {
    //         'Content-Type': 'multipart/form-data'
    //       }
    //     })
    //     .then(function() {
    //       console.log('SUCCESS!!')
    //     })
    //     .catch(function() {
    //       console.log('FAILURE!!')
    //     })
    // },
    // handleFileUpload() {
    //   this.file = this.$refs.file.files[0]
    // }
  }
}
</script>

<style lang="scss"></style>
