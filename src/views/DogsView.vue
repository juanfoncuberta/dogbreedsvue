<template>
  <h1>Dog</h1>
  <ul>
    <li v-for="dog in dogs" v-bind:key="dog">
      <router-link :to="`/dogs/${dog}`">{{ dog }}</router-link>
      
    </li>
  </ul>
</template>

<script setup>
import axios from 'axios'
import { ref,onBeforeMount } from 'vue'
import { RouterLink} from 'vue-router'

const result = ref([])
const dogs = ref([])
const getData = async () => { 
    try {
        const data = await axios.get('https://dog.ceo/api/breeds/list/all')
        if(data.status == 200)
          result.value = data.data.message
        else
          throw new TypeError(data.statusText)
   
        Object.keys(result.value).map(function(breed) {
          if((typeof breed == 'string'))
            dogs.value.push(breed)
         
            
      });
    } catch (error) {
        console.log("Error getting dogs from api",error)
    }
}

onBeforeMount(() => {
  getData()
})

</script>