<template>
  <div v-if="showBlock" @click="stopTimer">Click Me :-)</div>
</template>

<script>
export default {
  props: ['delay'],
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0
    }
  },

  mounted() {
    console.log('Mounted')

    setTimeout(() => {
      this.showBlock = true
      console.log(' From Block compo ', this.delay)
      this.startTimer()
    }, this.delay)
  },

  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10
      }, 10)
    },

    stopTimer() {
      clearInterval(this.timer)
      console.log('reaction time ', this.reactionTime)
      this.$emit('end', this.reactionTime)
    }
  },

  updated() {
    console.log('Updated')
  },

  beforeUpdate() {
    console.log('Before update')
  }
}
</script>

<style scoped>
div {
  width: 40%;
  background: cadetblue;
  color: white;
  vertical-align: middle;
  margin: 40px auto;
  border-radius: 4px;
  padding: 50px;
}
</style>