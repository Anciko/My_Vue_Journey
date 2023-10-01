<template>
  <div class="center">
    <h2>Ninja Reaction Timer</h2>
    <button @click="start" :disabled="isPlaying">Click Me</button>

    <Block v-if="isPlaying" :delay="delay" @end="endGame" />

    <Results v-if="showResults" :score="score" />
  </div>
</template>

<script>
import Block from './components/Block.vue'
import Results from './components/Results.vue'

export default {
  name: 'App',
  components: { Block, Results },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false
    }
  },
  methods: {
    start() {
      this.isPlaying = true
      this.showResults = false
      this.delay = 2000 + Math.random() * 5000
      console.log(this.delay)
    },
    endGame(reactionTime) {
      this.score = reactionTime
      this.isPlaying = false
      this.showResults = true
    }
  }
}
</script>

<style>
.center {
  text-align: center;
}
button {
  border: none;
  padding: 8px 16px;
  background: crimson;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}
</style>
