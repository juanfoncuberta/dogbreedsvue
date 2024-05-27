<template>
  <h1>Dogs</h1>
  <spinner v-if="loading"/>
  <ul class="list-group">
    <li v-for="dog in dogs" v-bind:key="dog" class="list-group-item list-group-item-action list-group-item-dark">
      <router-link :to="`/dogs/${dog}`">{{ dog }}</router-link>
      <favButton @toggleFavorite="toggleFavorite" :isFav=isFav(dog) :dog=dog ></favButton>
    </li>
  </ul>
</template>

<script setup>

  import { ref,onBeforeMount} from 'vue'
  import { RouterLink} from 'vue-router'
  import { fetchApi } from '@/composables/fetchApi';
  import spinner from '@/components/spinner.vue';
  import favButton from '@/components/favButton.vue';
  import { useFavsStore } from '@/store/favs';

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
  const toggleFavorite = (dog) =>favs.toggleFav(dog);
  const isFav = (breed) =>  favs.favs.indexOf(breed) != -1
  
  onBeforeMount(() => loadData())

</script>

<style scoped>
  
  li {
    background-color: black;
  }

  svg {
    padding-top: 14px;
    width: 45px;
    height: 45px;
  }
</style>