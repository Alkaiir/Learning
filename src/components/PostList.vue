<script setup>
import ListItem from '@/components/ListItem.vue'
import { getPosts } from '@/composeble/api/NewsApi'
import { ref, onMounted } from 'vue'

let postsId = ref([])

const getPostsId = async () => {
  postsId = await getPosts()
  console.log(postsId)
}

onMounted(() => {
  getPostsId()
})

setInterval(async () => await getPostsId(), 60000)

</script>

<template>
  <div class="list-content">
    <list-item v-for="postId in postsId" :key="postId" :post-id="postId">${postId}</list-item>
  </div>
</template>

<style scoped lang="sass">
@import @/css/PostList.sass
</style>
