<script>
export default {
  name: 'RefreshButton'

}
</script>

<template>
  <button class="refresh-button"></button>
</template>

<style scoped lang="sass">
.refresh-button
  background-color: rgba(255,255,255,0)
  background-image: url('@/assets/Refresh.png')
  background-position: center
  background-repeat: no-repeat
  background-size: cover
  width: 30px
  height: 30px
  border: none
  transform: rotate(0deg)

.refresh-button:hover
  transform: rotate(180deg)
  transition: .3s all
  cursor: pointer
</style>
