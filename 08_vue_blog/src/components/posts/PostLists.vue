<template>
  <div v-for="post in posts" :key="post">
    <SinglePost :post="post" />
  </div>
</template>

<script>
import SinglePost from './SinglePost.vue'
export default {
  components: { SinglePost },
  props: ['posts']
}
</script>

<style>
</style>