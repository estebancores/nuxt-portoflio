<template>
  <div>
    <el-row class="skills__list">
      <el-col :lg="{ span: 12 }">

        <h5> Frontend </h5>
        <template v-for="mfskill in skills.mainForntend">
          <Skill :skill-data="mfskill"  />
        </template>

        <h5> Otras </h5>
        <div class="secundary__skills__items">
          <template v-for="sfskill in skills.secFrontend">
            <Skill :skill-data="sfskill"  />
          </template>
        </div>
      </el-col>
      <el-col :lg="{ span: 12 }">
        <h5> Backend </h5>
        <template v-for="mbskill in skills.mainBackend">
          <Skill :skill-data="mbskill"  />
        </template>

        <h5>Otras</h5>
        <div class="secundary__skills__items">
          <template v-for="sbskill in skills.secBackend">
            <Skill :skill-data="sbskill"  />
          </template>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Skill from '@/components/skill'
export default {
  name: "skills",
  components: { Skill },
  computed: {
    skills() {
      return this.$t('skills.skillsList')
    }
  }
}
</script>

<style scoped>

</style>
