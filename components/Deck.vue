  
<template class="container mx-auto" >
    <h2 class="text-2xl m-2" >{{ $t('hand1') }}</h2>
    <div class="flex flex-nowrap overflow-x-auto overflow-x-scroll my-8">
        <Card v-for="card in cardsA" :key="card.id" :="card" ></Card>
    </div>
    <h2 class="text-2xl m-2" >{{ $t('hand2') }}</h2>
    <div class="flex flex-nowrap overflow-x-auto overflow-x-scroll my-8">
        <Card v-for="card in cardsB" :key="card.id" :="card" ></Card>
    </div>
    <h2 class="text-2xl m-2" >{{ $t('hand3') }}</h2>
    <div class="flex flex-nowrap overflow-x-auto overflow-x-scroll my-8">
        <Card v-for="card in cardsC" :key="card.id" :="card" ></Card>
    </div>

</template>
<script setup lang="ts">

import { cardsA, cardsB, cardsC } from '~/data/cards.json'
//import { cardsA, cardsB } from $t('fileDeck1') 

const { locale, setLocale } = useI18n()

import Card2 from './Card2.vue'

const route = useRoute()
const { data } = await useAsyncData(async () => {
  return await $fetch(`~/server/api/cards.json`)
})
console.log(locale.value)


</script> 

