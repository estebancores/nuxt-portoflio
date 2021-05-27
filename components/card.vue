<template>
    <div :class="['card', `${$store.getters.getTheme}-theme` ]">
      <slot name="card-content"></slot>
    </div>
</template>

<script>
  export default {
    name: "card"
  }
</script>
