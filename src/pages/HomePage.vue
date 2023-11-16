<script>
import PostList from '@/components/PostList.vue'

export default {
  name: 'HomePage',
  components: {
    PostList
  }
}

</script>

<template>
  <post-list></post-list>
</template>

<style scoped lang="sass">
@import @/css/HomePage.sass
</style>
