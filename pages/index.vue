<template>
  <div>
    <Card>
      <template slot="card-content">
        <div class="main__introduction">
          <div v-html="translations.welcome"></div>
          <div>
            <template v-for="p in translations.mainText"><p v-html="p"></p></template>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>
<script>
import Card from '@/components/card'
export default {
  name: 'Home',
  components: { Card },
  computed: {
    translations() {
      return this.$t('home')
    }
  }
}
</script>
