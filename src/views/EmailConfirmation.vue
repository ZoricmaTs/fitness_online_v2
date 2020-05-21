<template>
  <div>
    Hello email : {{ email }} code:
    {{ code }}
  </div>
</template>

<script>
export default {
  props: {
    email: {
      type: String,
      default: ''
    },
    code: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped></style>
