<script>
export default {
  name: 'ListItem',
  props: {
    postId: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      postData: {}
    }
  },
  methods: {
    getItems: async function () {
      const url = 'https://hacker-news.firebaseio.com/v0/item/' + this.postId + '.json?print=pretty'
      const response = await fetch(url)
      const json = await response.json()
      this.postData = json
    }
  },
  mounted () {
    this.getItems()
  }
}
</script>

<template>
  <section class="home-content__post">
    <h2 class="home-content__title">{{postData.title}}</h2>
    <p class="home-content__author">Author: {{postData.by}}</p>
    <p class="home-content__rate">Rate: {{postData.score}}</p>
    <p class="home-content__date">{{postData.time}}</p>
  </section>
</template>

<style scoped lang="sass">
@import @/css/ListItem.sass
</style>
