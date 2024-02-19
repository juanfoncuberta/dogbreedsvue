<template>
  <h1>Dog</h1>
</template>

<script setup>
import axios from 'axios'
import { ref,onBeforeMount } from 'vue'

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
      console.log(dogs.value)
    } catch (error) {
        console.log("Error getting dogs from api",error)
    }
}

onBeforeMount(() => {
  getData()
})

</script>