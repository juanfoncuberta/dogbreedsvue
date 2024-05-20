<template>
 
  <h1>Details</h1>
  <div>
    <button class="btn btn-primary" @click="back">Back</button>
  </div>
  
  {{ $route.params.breed }}
  
  <img :src="urlImage">
  <spinner v-if="loading" />

</template>

<script setup>
  import { onBeforeMount } from 'vue';
  import { useRoute, useRouter } from 'vue-router'
  import { ref } from 'vue';
  import { fetchApi } from '@/composables/fetchApi';
  import spinner from '@/components/spinner.vue';
  
  const { getData,loading } = fetchApi();

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