  
<template class="container mx-auto" >
    <div class="flex flex-col ">
        <h1 class="">{{ $t('titleGame1') }}</h1>
        <p class="">{{ $t('descriptionGame1') }}</p>
    </div>
    <h2 class="text-2xl" >Primera Mano</h2>
    <div class="flex flex-nowrap overflow-x-auto overflow-x-scroll">
        <Card @click="isOpen = true" v-for="card in cardsA" :key="card.id" :="card" >
            <UModal v-model="isOpen">
            <div class="p-4">
                <Placeholder class="h-48" />
            </div>
            </UModal>
        </Card>
        <div>
            <UButton label="Open" @click="isOpen = true" />
            
        </div>
        
    </div>
    <h2 class="text-2xl" >Segunda Mano</h2>
    <div class="flex flex-nowrap overflow-x-auto overflow-x-scroll">
        <Card v-for="card in cardsB" :key="card.id" :="card" ></Card>
    </div>
    <h2 class="text-2xl" >Tercera Mano</h2>
    <div class="flex flex-nowrap overflow-x-auto overflow-x-scroll">
        <Card v-for="card in cardsC" :key="card.id" :="card" ></Card>
    </div>
    <h2 class="text-2xl" >Test</h2>
    <div class="flex flex-nowrap overflow-x-auto overflow-x-scroll">
        <Card2 v-for="card in cardsB" :key="card.id" :="card" ></Card2>
    </div>

</template>
<script setup lang="ts">

const isOpen = ref(false)
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