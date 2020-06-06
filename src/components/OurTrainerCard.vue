<template>
  <section class="page__block-height page__block">
    <h2 class="page__heading text__heading_size_l">Наши тренеры</h2>
    <div>
      <h2 class="page__heading text__heading_size_l">Фильтр:</h2>
    </div>
    <div class="ourtrainer__block" v-for="trainer in trainers" :key="trainer.user_id">
      <div class="ourtrainer__block-min">
        <!-- :src="advancement.profile_photo_file_id" -->
        <img
          class="ourtrainer__img"
          :src="trainer.profile_photo_file_id"
          alt="trainer photo"
          width="146"
        />
        <h2 class="ourtrainer__heading-name text__heading_size_h2">{{ trainer.first_name }}</h2>
        <img
          class="ourtrainer__trainings"
          src="../assets/img/diet black.svg"
          alt="trainings"
          width="19"
          height="19"
        />
        <span class="ourtrainer__trainings-numb text__heading_size_m">5</span>
      </div>
      <div class="ourtrainer__block-min">
        <p class="ourtrainer__heading">О себе</p>
        <p class="ourtrainer__body text__heading_size_s">{{ trainer.about_me }}</p>
        <p class="ourtrainer__heading">Направления</p>
        <p
          class="ourtrainer__tags text__heading_size_s"
          v-for="training_type in trainer.training_types"
          :key="training_type.training_type_id"
        >{{ training_type.name }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import AuthorizationService from '@/services/AuthorizationService.js'
export default {
  data() {
    return {
      trainers: [],
      imageUrl: ''
    }
  },
  created() {
    AuthorizationService.getTrainers(
      localStorage.user_id,
      localStorage.token
    ).then(response => {
      let serverTrainersInfo = responce.data
      this.trainers = {
        about_me: serverTrainersInfo.about_me,
        achievements: serverTrainersInfo.achievements,
        first_name: serverTrainersInfo.first_name,
        profile_photo_file_id: serverTrainersInfo.first_name,
        role: serverTrainersInfo.role,
        training_types: serverTrainersInfo.training_types,
        user_id: serverTrainersInfo.user_id
      }
      if (this.serverTrainersInfo.profile_photo_file_id != '') {
        this.imageUrl = `http://80.89.238.253:5000/media/files/${this.serverTrainersInfo.profile_photo_file_id}?token=${localStorage.token}`
      }
      serverTrainersInfo.training_types.forEach(elem => {})
    })
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/our-trainers.scss';
</style>
