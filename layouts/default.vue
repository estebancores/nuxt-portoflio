<template>
  <el-row>
    <el-col :lg="{ span:12, offset: 6 }">
      <Header />
      <el-row>
        <Nuxt />
      </el-row>
      <Footer />
    </el-col>
  </el-row>
</template>
<script>
  import Header from '@/components/layout/Header'
  import Footer from '@/components/layout/Footer'
  export default {
    name : 'Home',
    components: {
      Header,
      Footer
    }
  }
</script>
