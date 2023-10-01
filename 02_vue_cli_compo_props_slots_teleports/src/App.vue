
<template>
  <!-- <h2>{{ title }}</h2>
  <input type="text" ref="username" />
  <button @click="handleClick">Click Me</button> -->
  <teleport to="#modals" v-if="showModal">
    <Modal :title="title" :text="text" theme="sale" @close="toggleModal">
      <i>This is the slot</i>

      <template v-slot:links>
        <a href="#" class="btn">More Info...</a>
      </template>

    </Modal>
  </teleport>

  <teleport to="#modals" v-if="showModalTwo">
    <Modal :title="title" :text="text" theme="sale" @close="toggleModalTwo">
      <i>This is the slot Two</i>

      <!-- creating named slot -->
      <template v-slot:links>
        <a href="#" class="btn">More Info two...</a>
      </template>
    </Modal>
  </teleport>

  <button @click.alt="toggleModal">
    <span v-if="showModal">Hide Modal (Alt) </span>
    <span v-else>Show Modal (Alt)</span>
  </button>

  <button @click="toggleModalTwo">
    <span v-if="showModalTwo">Hide Modal 2 </span>
    <span v-else>Show Modal 2</span>
  </button>
</template>


<script>
import Modal from './components/Modal/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'My First Vue App :)',
      text: 'Grab the chance',
      showModal: false,
      showModalTwo: false
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.username)
      this.$refs.username.classList.add('active')
      this.$refs.username.focus()
    },

    toggleModal() {
      this.showModal = !this.showModal
    },

    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.active {
  background: cadetblue;
}
input {
  padding: 8px;
  border: none;
  outline: none;
  border-radius: 4px;
  background: #eee;
}
button {
  border: none;
  padding: 8px 16px;
  color: cornflowerblue;
  border-radius: 4px;
}
.btn {
  display: block;
  border: none;
  background: black;
  border-radius: 4px;
  color: white;
  text-decoration: none;
  padding: 4px 10px;
}
</style>
