<template>
  <div v-if="post">
    <h3>{{ post.name }}</h3>
    <p>{{ post.description }}</p>
  </div>
  <div v-else>Loading...</div>
</template>

<script>
import { ref } from 'vue'
export default {
  props: ['id'],
  setup(props) {
    const post = ref(null)
    const error = ref(null)

    const loader = async () => {
      await fetch(`http://localhost:3000/posts/${props.id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log('Data', data)
          post.value = data
        })
        .catch((err) => {
          error.value = err
          console.log(err)
        })
    }

    loader()

    return { post, error }
  }
}
</script>

<style>
</style>