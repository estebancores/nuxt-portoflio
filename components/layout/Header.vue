<template>
    <div class="nav__container">
      <nav>
        <div class="logo__theme">
          <span class="name__logo">ECOR</span>
<!--          <button class="btn btn-flat" @click="changeTheme()">-->
<!--            <i v-if="theme == 'light'" class="bx bxs-moon"></i>-->
<!--            <i v-else class="bx bxs-sun"></i>-->
<!--          </button>-->
          <ul class="language__selector">
            <li
              class="lang__item"
              v-for="lang in $i18n.locales"
              v-if="$i18n.locale != lang.code"
            >
              <nuxt-link :to="switchLocalePath(lang.code)">
                <div :class="['lang__image', lang.code]"></div> {{ lang.name }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <ul :class="[`${theme}-theme`, 'nav__menu__options']">
          <li
            v-for="(rou, idx) in menu"
            :class="[ activeOption == idx ? 'active' : '']"
            :key="`${idx}_nav`"
            @click="setActiveOption(idx)">
            <nuxt-link :to="localePath(rou.route)">
              {{ rou.text }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        activeOption: 0
      }
    },
    mounted() {
      let routes = {
        skills: 1, experience: 2, contact: 3
      }
      let route = this.$route.fullPath.split('/').pop()
      this.activeOption = !route ? 0 : routes[route]
    },
    computed: {
      theme() {
        return this.$store.getters.getTheme
      },
      menu() {
        return this.$t('header.menu')
      }
    },
    methods: {
      changeTheme() {
        this.$store.commit('toggleTheme')
      },
      setActiveOption(selected) {
        this.activeOption = selected
      }
    }
  }
</script>

<style scoped>
.name__logo{
  font-size: 2.5rem;
}
</style>
