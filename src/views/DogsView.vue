<template>
  <!-- <h1>Dog</h1> -->
  <ul>
    <li v-for="dog in dogs" v-bind:key="dog">
      <router-link :to="`/dogs/${dog}`">{{ dog }}</router-link>
    </li>
  </ul>
</template>

<script setup>

import { ref,onBeforeMount } from 'vue'
import { RouterLink} from 'vue-router'
import { fetchApi  } from '@/composables/fetchApi';

const { getData } = fetchApi()
const dogs = ref([])
const loadData = async () => { 
    try {
        const result =  await getData('https://dog.ceo/api/breeds/list/all')
        
        Object.keys(result.message ).map(function(breed) {
          if((typeof breed == 'string'))
            dogs.value.push(breed)   
      });
    } catch (error) {
        console.log("Error getting dogs from api",error)
    }
}

onBeforeMount(() => loadData())

</script>