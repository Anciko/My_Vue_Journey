<template>
  <div v-if="job">
    <h3>Job details</h3>
    <!-- <p>Id is =>  {{ $route.params.id  }} </p> -->
    <h4>Title is {{ job.name }}</h4>
    <p> Description is {{ job.details}} </p>
    <p>Id is {{  id }}</p>
  </div>
  <div v-else>
    Loading jobs.....
  </div>
</template>

<script>
export default {
    props: ['id'],

    data() {
      return {
        job: null
      }
    },
    mounted() {
      fetch(`http://localhost:3000/jobs/${this.id}`)
      .then(res => res.json())
      .then(data =>  this.job = data )
      .catch(err => console.log(err.message))
    }
}
</script>

<style>

</style>