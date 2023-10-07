<template>
  <h1>All Posts</h1>
  <div class="d-flex justify-content-between">
    <div class="col-md-5">
      <div v-if="error"> {{ error }} </div>
      <div v-if="posts.length">
        <PostLists  :posts="posts" />
      </div>
      <div v-else>
        Loading...
      </div>
    </div>
    <div class="col-md-3">
      <h4>Tags</h4>
      <div class="card p-4">
        <span>tags</span>
      </div>
    </div>
  </div>
</template>

<script>
import PostLists from '../components/posts/PostLists.vue'
import getPosts from '../composables/getPosts'
export default {
  components: { PostLists },
  setup() {
    const { posts, error, loader } = getPosts()

    loader()
  
    return { posts, error }
  }
}
</script>

<style>
</style>