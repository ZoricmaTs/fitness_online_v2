<template>
  <div class="bg-color">
    <BasePageTrainer>
      <div>
        <SettingProfile />
        <Settingtrainings />
      </div>
    </BasePageTrainer>
  </div>
</template>

<script>
import BasePageTrainer from '@/views/Trainer/BasePageTrainer.vue'
import SettingProfile from '@/components/SettingProfile.vue'
import Settingtrainings from '@/components/Settingtrainings.vue'
export default {
  components: {
    BasePageTrainer,
    SettingProfile,
    Settingtrainings
  }
}
</script>

<style lang="scss" scoped></style>
