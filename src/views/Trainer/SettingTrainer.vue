<template>
  <div class="bg-color">
    <BasePageTrainer>
      <div>
        <SettingProfile />
      </div>
    </BasePageTrainer>
  </div>
</template>

<script>
import BasePageTrainer from '@/views/Trainer/BasePageTrainer.vue'
import SettingProfile from '@/components/SettingProfile.vue'
export default {
  components: {
    BasePageTrainer,
    SettingProfile
  }
}
</script>

<style lang="scss" scoped></style>
