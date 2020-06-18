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
      trainers: [
        {
          about_me: '',
          achievements: [],
          first_name: 'Алёша1',
          profile_photo_file_id: 'b268398ba9ab4a8bbeb7ebb54def38491edbc753',
          role: 'trainer',
          training_types: [
            {
              attachments: [
                {
                  comment: 'воркаут',
                  creation_date: '2020-05-28 19:05:08',
                  file_id: '3c1d6b44e0e2c1cf2df17133b4cb2029cd957efc',
                  link: '/media/files/3c1d6b44e0e2c1cf2df17133b4cb2029cd957efc',
                  mimetype: 'image/jpeg'
                }
              ],
              description:
                'уличная гимнастика, которая может быть отнесена к любительскому виду спорта, физической культуре и представляет собой спортивную субкультуру. Включает в себя выполнение различных упражнений на уличных спортплощадках, а именно на турниках, брусьях, шведских стенках, рукоходах и прочих конструкциях, или вообще без их использования (на земле). Основной акцент делается на работу с собственным весом и развитие силы и выносливости. Люди, увлекающиеся таким спортом, называют себя по-разному: воркаутеры, уличные (дворовые) спортсмены, уличные гимнасты, турникмены и т.д.',
              name: 'воркаут',
              training_type_id: 1
            },
            {
              attachments: [],
              description: 'йога описание',
              name: 'йога',
              training_type_id: 3
            }
          ],
          user_id: 37
        },

        {
          about_me: 'Я тренер.',
          achievements: [],
          profile_photo_file_id: '6e77fcff0edb35e3cc8c440dbfc11b1c5343c6ad',
          registration_time: '<hidden>',
          role: 'trainer',
          training_types: [],
          user_id: 48
        },

        {
          about_me:
            'Cпорт всегда был в моей жизни: футбол, фигурное катание, лакросс, танцы. В студенческие годы  поняла, что хочу обучать и стимулировать людей, поэтому получила образование учителя. После шести лет работы решила изменить всё — и совместила любовь к спорту и преподаванию, стала персональным тренером, в том числе по боксу.',
          achievements: [
            {
              achievement_id: 1,
              creation_time: '2020-05-28 19:43:20',
              creator_id: 41,
              description: 'Новое описание ваших крутых достижений',
              name: 'подтянулся 3 раза'
            }
          ],
          first_name: 'Ипполит',
          profile_photo_file_id: '4e6f3a40b1d64aecde30d46c781f1bebb865bfec',
          role: 'trainer',
          training_types: [
            {
              attachments: [
                {
                  comment: 'воркаут',
                  creation_date: '2020-05-28 19:05:08',
                  file_id: '3c1d6b44e0e2c1cf2df17133b4cb2029cd957efc',
                  link: '/media/files/3c1d6b44e0e2c1cf2df17133b4cb2029cd957efc',
                  mimetype: 'image/jpeg'
                }
              ],
              description:
                'уличная гимнастика, которая может быть отнесена к любительскому виду спорта, физической культуре и представляет собой спортивную субкультуру. Включает в себя выполнение различных упражнений на уличных спортплощадках, а именно на турниках, брусьях, шведских стенках, рукоходах и прочих конструкциях, или вообще без их использования (на земле). Основной акцент делается на работу с собственным весом и развитие силы и выносливости. Люди, увлекающиеся таким спортом, называют себя по-разному: воркаутеры, уличные (дворовые) спортсмены, уличные гимнасты, турникмены и т.д.',
              name: 'воркаут',
              training_type_id: 1
            },
            {
              attachments: [],
              description: 'стретчинг описание',
              name: 'стретчинг',
              training_type_id: 2
            }
          ],
          user_id: 42
        },
        {
          about_me: 'хе-хеей',
          achievements: [],
          first_name: 'Lolik&Bolik',
          is_deleted: false,
          profile_photo_file_id: 'adccfaf8dda06ec518a31326f9e5b925e145adab',
          role: 'trainer',
          training_types: [],
          user_id: 55
        },
        {
          about_me: 'Я типа бекенд тут пишу',
          achievements: [],
          first_name: '',
          profile_photo_file_id: '',
          role: 'trainer',
          training_types: [],
          user_id: 1
        }
      ],
      imageUrl: ''
    }
  },
  created() {
    // AuthorizationService.getTrainers(
    //   localStorage.user_id,
    //   localStorage.token
    // ).then(response => {
    //   let serverTrainersInfo = responce.data
    //   this.trainers = {
    //     about_me: serverTrainersInfo.about_me,
    //     achievements: serverTrainersInfo.achievements,
    //     first_name: serverTrainersInfo.first_name,
    //     profile_photo_file_id: serverTrainersInfo.first_name,
    //     role: serverTrainersInfo.role,
    //     training_types: serverTrainersInfo.training_types,
    //     user_id: serverTrainersInfo.user_id
    //   }
    //   if (this.serverTrainersInfo.profile_photo_file_id != '') {
    //     this.imageUrl = `http://80.89.238.253:5000/media/files/${this.serverTrainersInfo.profile_photo_file_id}?token=${localStorage.token}`
    //   }
    // })
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/our-trainers.scss';
</style>
