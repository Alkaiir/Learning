<script>
import RefreshButton from '@/components/UI/RefreshButton.vue'

export default {
  name: 'AppHeader',
  components: {
    RefreshButton
  }
}
</script>

<template>
  <div class="header-content">
    <h1 class="header-content__logo">
      HackerNews
    </h1>
    <refresh-button></refresh-button>
  </div>
</template>

<style scoped lang="sass">
@import @/css/AppHeader.sass
</style>
