export const state = () => ({
  locales: ['es', 'en'],
  theme: 'light'
})
export const getters = {
  getTheme(state) {
    return state.theme
  }
}

export const mutations = {
  toggleTheme(state) {
    if (state.theme == 'light') {
      state.theme = 'dark'
    } else {
      state.theme = 'light'
    }
  }
}
