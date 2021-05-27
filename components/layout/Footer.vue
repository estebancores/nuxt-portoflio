<template>
  <footer class="footer">
    &copy;  Esteban Córdoba - {{ new Date().getFullYear() }}
  </footer>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>
  .footer {
    text-align: center;
    padding: 20px;
  }
</style>
