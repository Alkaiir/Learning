<script setup>
import { getPost } from '@/composeble/api/NewsApi'
import { ref, onMounted, defineProps } from 'vue'
let postData = ref({})

const props = defineProps({
  postId: {
    type: Number,
    required: true
  }
})

const getPostData = async () => {
  postData = await getPost(props.postId)
  console.log(postData)
}

onMounted(() => {
  getPostData()
})
</script>

<template>
  <section class="home-content__post">
    <h2 class="home-content__title">{{ postData }}</h2>
    <p class="home-content__author">Author: {{ postData.by }}</p>
    <p class="home-content__rate">Rate: {{ postData.score }}</p>
    <p class="home-content__date">{{ postData.time }}</p>
    <p @click="$router.push(`new/${postId}`)" class="home-content__link">
      See More
    </p>
  </section>
</template>

<style scoped lang="sass">
@import @/css/ListItem.sass
</style>
