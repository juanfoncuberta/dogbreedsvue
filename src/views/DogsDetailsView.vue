<template>
  <h1>Details</h1>
  
  {{ $route.params.breed }}

  <img :src="urlImage">
</template>


<script setup>
  import { onBeforeMount } from 'vue';
  import { useRoute } from 'vue-router'
  import axios from 'axios';
  import { ref } from 'vue';

  const urlImage = ref([])
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