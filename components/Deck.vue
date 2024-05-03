  
<template>
    <h2 class="text-2xl" >Component Deck</h2>
    <div class="flex flex-row">
        <Card v-for="card in cards" :key="card.id" :="card" ></Card>
    </div>
</template>
<script setup lang="ts">
import { cards } from '~/server/api/cards.json'

const route = useRoute()
const { data } = await useAsyncData(async () => {
  return await $fetch(`~/server/api/cards.json`)
})

</script> 

