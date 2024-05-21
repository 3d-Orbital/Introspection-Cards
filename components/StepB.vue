  
<template class="container mx-auto" >
    <div class="flex flex-col ">
        <h2 class="">{{ $t('chooseCard') }}</h2>

    </div>
    <UButton @click="storeGame.setGameStage1('StageB')">{{ $t('showCards') }}</UButton>
    <div v-if="storeGame.actualStage === 'StageB'">
        <h2 class="text-2xl" >Segunda Mano</h2>
        <div class="flex flex-nowrap overflow-x-auto overflow-y-auto overflow-x-scroll">
            <Card @click="isOpen = true; storeCards.addCardsToList(card)" v-for="card in cardsB" :key="card.id" :="card" ></Card>
        </div>
    </div>
        
    <div>
        <UModal v-model="isOpen">
        <div class="p-4">
            <Card v-on:click="storeGame.setGameStage1('StageC')" v-for="card in storeCards.cardsSelected " :key="card.id" :="card"></Card>
            <UButton to="/stepC">Next</UButton>
        </div>
        </UModal>
    </div>

</template>
<script setup lang="ts">
import { mapState, mapStores } from 'pinia';
import { cardsB } from '~/data/cards.json'

const store = useCardsStore()

const storeCards = useCardsSelectedStore()
const lista = useCardsStore().getCardslist

//import { cardsA, cardsB } from $t('fileDeck1') 

const id = useId()

console.log(id)

const storeGame = useCardsSelectedStore()

const setStage = (value:string) => {
    storeGame.setGameStage1(value)
    
}

const { locale, setLocale } = useI18n()

const isOpen = ref(false)

const route = useRoute()
const { data } = await useAsyncData(async () => {
  return await $fetch(`~/server/api/cards.json`)
})

console.log(locale.value)


</script> 