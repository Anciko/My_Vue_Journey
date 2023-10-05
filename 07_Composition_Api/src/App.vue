<template>
  <div>
    <p>Name is {{ name }} and age is {{ age }} </p>
    <button @click="handleClick">Click</button>
    <button @click="increaseAge">Increase</button>
  <hr>
    <input type="text" v-model="search">
    <p v-for="car in matchingCars" :key="car.name">
      {{ car }}
    </p>
  </div>
</template>


<script>
import { computed, reactive, ref } from 'vue'
export default {
  setup() {
    let search = ref(""); 

    let name = ref('John');
    let user = ref({name: 'UTube'});
    let age = ref(21);

    let cars = ref(['toyota', 'landcruiser', 'rav', 'light truck', 'sinny'])

    let name2 = reactive({name: 'Similax'})

    const handleClick = () => {
      name.value = "Alice"
    };


    let matchingCars = computed(() => {
      return cars.value.filter(car => car.includes(search.value))
    });


    const increaseAge = () => {
      age.value += 1
    };
    
    console.log(name.value)
    console.log(user.value.name)
    console.log(name2.name)

    return { name, age, handleClick, increaseAge, cars, search, matchingCars }
  }
}
</script>


<style>
</style>