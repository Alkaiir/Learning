<script>
import ListItem from '@/components/ListItem.vue'

export default {
  name: 'PostList',
  components: {
    ListItem
  },
  data () {
    return {
      postsId: []
    }
  },
  methods: {
    getPosts: async function () {
      const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
      const json = await response.json()
      this.postsId = json.slice(0, 99)
    }
  },
  created () {
    this.getPosts()
    setInterval(this.getPosts, 60000)
  }
}
</script>

<template>
  <div class="list-content">
    <list-item v-for="post in postsId" :key="post" :post-id="post"></list-item>
  </div>
</template>

<style scoped lang="sass">
@import @/css/PostList.sass
</style>
