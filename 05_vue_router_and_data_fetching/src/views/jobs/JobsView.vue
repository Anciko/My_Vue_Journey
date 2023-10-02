<template>
  <div v-if="jobs.length > 0">
    <div v-for="job in jobs" :key="job.id">
      <RouterLink :to="{ name: 'jobsdetails', params: { id: job.id } }">
        <h4>{{ job.name }}</h4>
      </RouterLink>

      <p>{{ job.details }}</p>
    </div>
  </div>
  <div v-else>Loading jobs...</div>
</template>

<script>
export default {
  data() {
    return {
      jobs: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/jobs')
      .then((res) => res.json())
      .then((data) => (this.jobs = data))
      .catch((err) => console.log(err.message))
  }
}
</script>

<style></style>