<template>
    <h1>Favs Breeds</h1>
    <ul class="list-group">
    <li v-for="fav in favs.favs" v-bind:key="fav" class="list-group-item list-group-item-action list-group-item-dark">
      {{ fav }}
    </li>
  </ul>

</template>

<script setup >
import { useFavsStore } from '@/store/favs';

const favs = useFavsStore()


</script>