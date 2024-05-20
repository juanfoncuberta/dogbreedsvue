<template>
 
  <h1>Details</h1>
  <div>
    <button class="primary" @click="back">Back</button>
  </div>
  
  {{ $route.params.breed }}
  <img :src="urlImage">

</template>

<script setup>
  import { onBeforeMount } from 'vue';
  import { useRoute, useRouter } from 'vue-router'
  import { ref } from 'vue';
  import { fetchApi } from '@/composables/fetchApi';
  
  const { getData } = fetchApi();

   const loadData = async() => {

    try{

      const result = await getData(`https://dog.ceo/api/breed/`+useRoute().params.breed+`/images/random`)
      urlImage.value = result.message

    }catch(error){
      console.log("Error getting breed detail from api",error)
    }

  }
  const router = useRouter()
  const urlImage = ref([])
  const back = () => {
    router.push('/dogs')
  }

  onBeforeMount( () => loadData());

</script>