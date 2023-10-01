<template>
  <p>Result is {{ score }}</p>
  <p class="rank">{{ rank }}</p>
</template>

<script>
export default {
    props: ['score'],
    data() {
        return {
            rank: null
        }
    },

    mounted() {
        if(this.score < 250) {
            this.rank = 'Ninja Fingers 🔥'
        }else if(this.score < 400) {
            this.rank = 'Rapid Reflexes......😻'
        }else {
            this.rank = 'Snail pace.....😜'
        }
    }
}
</script>

<style>
    .rank {
        color: lightseagreen;
    }
</style>