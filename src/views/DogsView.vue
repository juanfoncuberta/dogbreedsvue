<template>
  <h1>Dogs</h1>
  <spinner v-if="loading"/>
  <ul class="list-group">
    <li v-for="dog in dogs" v-bind:key="dog" class="list-group-item list-group-item-action list-group-item-dark">
      <router-link :to="`/dogs/${dog}`">{{ dog }}</router-link>
      <!-- <button class="favButton" style="background-color: black; border: 0px;" sayHi(this)"> -->
     
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" @click="favs.toggleFav(dog)">
            <path fill="#ffffff" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
          </svg>
      
      <!-- </button> -->
    </li>
  </ul>
</template>

<script setup>

import { ref,onBeforeMount } from 'vue'
import { RouterLink} from 'vue-router'
import { fetchApi } from '@/composables/fetchApi';
import spinner from '@/components/spinner.vue';
import { useFavsStore } from '@/store/favs';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const sayHi = (el) => {
  
}
const favs = useFavsStore()
const { getData,loading} = fetchApi()
const dogs = ref([])
const loadData = async () => { 
    try {
        const result =  await getData('https://dog.ceo/api/breeds/list/all')

        Object.keys(result.message ).map((breed) => {
          if((typeof breed == 'string'))
            dogs.value.push(breed)   
      });
    } catch (error) {
        console.log("Error getting dogs from api",error)
    }
}

onBeforeMount(() => loadData())

</script>

<style scoped>
  li {
    background-color: black;
 
  }
.favButton{
  width: 50px;
  height: 50px;
}
    
.favButton svg {
 
}

svg {
  padding-top: 14px;
  width: 45px;
  height: 45px;
}
</style>