<template>
  <section>
    <h2 class="page__heading text__heading_size_l">Наши тренеры</h2>
    <div>
      <h2 class="page__heading text__heading_size_l">Фильтр:</h2>
      <select
        >все</select
      >
    </div>

    <img src />
  </section>
</template>

<script>
export default {
  data() {
    return {
      trainers: [
        {
          about_me: 'Сказочный',
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
          first_name: 'Васья',
          profile_photo_file_id: '6e77fcff0edb35e3cc8c440dbfc11b1c5343c6ad',
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
              creator_id: 41,
              description: 'Межрайонное соревнование',
              name: 'турникмен 2019'
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
          about_me: '',
          achievements: [],
          first_name: 'Lolik&Bolik',
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
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
