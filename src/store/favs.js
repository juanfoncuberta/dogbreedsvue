import { defineStore } from "pinia";

import { ref, computed } from 'vue'

export const useFavsStore = defineStore("favs",() => {

  const favs = ref([])

  if(localStorage.getItem('favs')) 
      favs.value = JSON.parse(localStorage.getItem('favs'))

  const toggleFav = (dogBreed) => {

    const index = favs.value.indexOf(dogBreed);
        if (index > -1) 
            favs.value.splice(index, 1); 
        else
            favs.value.push(dogBreed)
      
        localStorage.setItem('favs',JSON.stringify(favs.value))
  }
  
  return {
    favs,
    toggleFav
  };
});