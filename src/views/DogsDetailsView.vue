<template>
 
  <h1>Details</h1>
  
  {{ $route.params.breed }}

  <img :src="urlImage">

  <button @click="back">Back</button>
</template>


<script setup>
  import { onBeforeMount } from 'vue';
  import { useRoute, useRouter } from 'vue-router'
  import axios from 'axios';
  import { ref } from 'vue';

  const router = useRouter()
  const urlImage = ref([])
  const back = () => {
    console.log("dentro")
    router.push('/dogs')
  }
  onBeforeMount( async() => {
    try{
      const data = await axios.get(`https://dog.ceo/api/breed/`+useRoute().params.breed+`/images/random`)
      if(data.status == 200)
          urlImage.value = data.data.message
      else
        throw new TypeError(data.statusText)
    }catch(error){
      console.log("Error getting breed detail from api",error)
    }

  })

</script>