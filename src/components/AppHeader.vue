<script setup>
import RefreshButton from '@/components/UI/RefreshButton.vue'
import { getPosts } from '@/composeble/api/NewsApi'
</script>

<template>
  <div class="header-content">
    <h1
      @click="$router.push('/')"
      class="header-content__logo">
      HackerNews
    </h1>
    <refresh-button @click="getPosts()"></refresh-button>
  </div>
</template>

<style scoped lang="sass">
@import @/css/AppHeader.sass
</style>
