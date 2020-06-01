<template>
  <div>
    <BasePageTrainer>
      <section class="about-serv">
        <h2 class="about-serv__heading text__heading_size_l">Что предлагает наш сервис?</h2>
        <div class="about-serv__block-title">
          <div class="about-serv__bg-img">
            <div class="about-serv__text-reg">
              <p class="about-serv__text-reg-body">
                Мы помогаем нашим пользователям работать и тренироваться не
                выходя из дома. Записывайте видео, делитесь достижениями в
                социальных сетях и поддерживайте свое здоровье вместе с нами!
              </p>
            </div>
          </div>
        </div>
        <section class="about-serv__blocks-step">
          <div class="about-serv__block-step">
            <p class="about-serv__heading-step">Шаг 1</p>
            <img
              class="about-serv__img-step"
              src="../../assets/img/about-serv-step1.png"
              alt="about service - step 1"
              width="209"
              height="209"
            />
            <p class="about-serv__body-step">Зарегистрируйтесь и настройте профиль</p>
          </div>
          <div class="about-serv__block-step">
            <p class="about-serv__heading-step">Шаг 2</p>
            <img
              class="about-serv__img-step"
              src="../../assets/img/about-serv-step2trainer.png"
              alt="about service - step 2"
              width="209"
              height="209"
            />
            <p
              class="about-serv__body-step"
            >Добавьте свои сертификаты и награды в раздел “Достижения”</p>
          </div>
          <div class="about-serv__block-step">
            <p class="about-serv__heading-step">Шаг 3</p>
            <img
              class="about-serv__img-step"
              src="../../assets/img/about-serv-step3trainer.png"
              alt="about service - step 3"
              width="209"
              height="209"
            />
            <p class="about-serv__body-step">
              Запишити демо-ролики по направлениям, в которых вы тренируете и
              расставьте теги, чтобы ваши клиенты не потерялись
            </p>
          </div>
        </section>
      </section>
    </BasePageTrainer>
  </div>
</template>
<script>
// import AboutServcomp from '@/components/AboutServcomp.vue'
import BasePageTrainer from '@/views/Trainer/BasePageTrainer.vue'
export default {
  components: {
    BasePageTrainer
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/about-serv.scss';
@import '@/assets/scss/home-aboutserv.scss';
</style>
