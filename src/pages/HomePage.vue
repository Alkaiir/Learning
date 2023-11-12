<script>

export default {
  name: 'HomePage',
  data () {
    return {
      posts: []
    }
  },
  methods: {
    getPosts: async function () {
      const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
      const json = await response.json()
      const slicedJson = json.slice(0, 99)
      for (const i in slicedJson) {
        const url = 'https://hacker-news.firebaseio.com/v0/item/' + slicedJson[i] + '.json?print=pretty'
        const response = await fetch(url)
        const json = await response.json()
        this.posts.push(json)
      }
    },
    timeConvert: function (timestamp) {
      const dateVal = new Date(timestamp * 1000).toLocaleDateString('en-US')
      return dateVal
    }
  },
  beforeMount () {
    this.getPosts()
  }
}
</script>

<template>
  <div class="home-content">
    <section class="home-content__post"
             v-for="post in posts"
             :key="post.id"
    >
      <h2 class="home-content__title">{{post.title}}</h2>
      <p class="home-content__author">Author: {{post.by}}</p>
      <p class="home-content__rate">Rate: {{post.score}}</p>
      <p class="home-content__date">{{timeConvert(post.time)}}</p>
    </section>
  </div>
</template>

<style scoped lang="sass">
@import @/css/HomePage.sass
</style>
