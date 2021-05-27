<template>
    <el-row>
      <template v-if="!skillData.secundary">
        <div class="main__skill__container">
          <el-row>
            <el-col :xs="{ span: 18 }" :lg="{ span: 16}">
              <div>
                <strong> {{ skillData.name }} </strong> <br>
                <span class="additional__skill__text">{{ skillData.text }}</span>
              </div>
              <div class="skill__knowledge__level">
                <div class="skill__level" :style="{ width: `${skillData.knowledgeLvl}%` }">
                  {{ skillData.knowledgeLvl }}%
                </div>
              </div>
            </el-col>
            <el-col :xs="{ span: 6 }" :lg="{ span: 8 }">
              <div class="skill__image">
                <img :src="require(`@/assets/images/${skillData.image}`)" alt="">
              </div>
            </el-col>
          </el-row>
        </div>
      </template>
      <template v-else>
        <div class="secundary__skill__container">
          <el-row>
            <el-col>
              <div class="skill__image">
                <img :src="require(`@/assets/images/${skillData.image}`)" alt="">
              </div>
              <strong> {{ skillData.name }} </strong> <br>
            </el-col>
          </el-row>
        </div>
      </template>
    </el-row>
</template>

<script>
export default {
  name: "skill",
  props: {
    skillData: {
      type: Object,
      default: () => {
        return {
          name: '',
          image: '',
          knowledgeLvl: 0,
          text: '',
        }
      }
    }
  }
}
</script>
