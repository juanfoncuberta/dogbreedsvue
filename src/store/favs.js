import { defineStore } from "pinia";
import { ref, computed } from 'vue'

export const useFavsStore = defineStore("favs",() => {

  const favs = ref([])

  const toggleFav = (dogBreed) => {

    const index = favs.value.indexOf(dogBreed);
        if (index > -1) 
            favs.value.splice(index, 1); 
        else
            favs.value.push(dogBreed)

  }
  
  return {
    favs,
    toggleFav
  };
});