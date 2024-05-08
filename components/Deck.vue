  
<template class="container mx-auto" >
    <h2 class="text-2xl" >Component Deck 2</h2>
    <div class="flex flex-nowrap overflow-x-auto overflow-x-scroll">
        <Card2 v-for="card in cardsA" :key="card.id" :="card" ></Card2>
    </div>
    <h2 class="text-2xl" >Component Deck</h2>
    <div class="flex flex-nowrap overflow-x-auto overflow-x-scroll">
        <Card v-for="card in cardsB" :key="card.id" :="card" ></Card>
    </div>

</template>
<script setup lang="ts">

import { cardsA, cardsB } from '~/data/cards.json'

const route = useRoute()
const { data } = await useAsyncData(async () => {
  return await $fetch(`~/server/api/cards.json`)
})

</script> 

