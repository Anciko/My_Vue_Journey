<template>
  <div class="card p-3">
    <router-link :to="{ name: 'postdetails', params: { id: post.id } }">
      <h3>{{ post.name }}</h3>
    </router-link>
    <p>{{ snippet }}</p>
  </div>
</template>

<script>
import { computed } from 'vue';
export default {
  props: ['post'],
  setup(props) {
    const snippet = computed(() => {
        return props.post.description.substring(0, 30) + "..."
    });

    return { snippet }
  }
}
</script>

<style>
</style>