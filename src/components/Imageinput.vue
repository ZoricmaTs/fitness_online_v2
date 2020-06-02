<template>
  <form type="text/x-template" id="image-input">
    <div
      class="image-input"
      :style="{ 'background-image': `url(${imageData})` }"
      @click="chooseImage"
    >
      <div class="btn-add-img-modal" v-if="!imageData"></div>
      <input class="file-input" ref="fileInput" type="file" @input="onSelectFile" />
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      imageData: null
    }
  },
  methods: {
    chooseImage() {
      this.$refs.fileInput.click()
    },

    onSelectFile() {
      const input = this.$refs.fileInput
      const files = input.files
      if (files && files[0]) {
        const reader = new FileReader()
        reader.onload = e => {
          this.imageData = e.target.result
        }
        reader.readAsDataURL(files[0])
        this.$emit('input', files[0])
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
