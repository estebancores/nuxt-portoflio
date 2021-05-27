<template>
  <el-row>
    <el-col class="master__container">
      <template v-for="exp in experiencies" >
        <div class="experience__row">
          <div class="left__time__indicator">
            <div class="start">{{ exp.end }}</div>
            <div class="end">{{ exp.start }}</div>
          </div>
          <div class="experience__container">
            <div class="company"> {{ exp.company }} </div>
            <div class="technologies"> {{exp.technologies}} </div>
            <div class="role__tasks">
              <ul><li v-for="task in exp.features"> {{task}} </li></ul>
            </div>
          </div>
        </div>
      </template>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "experience",
    computed: {
      experiencies() {
        return this.$t('experiences')
      }
    }
  }
</script>

<style scoped>

</style>
