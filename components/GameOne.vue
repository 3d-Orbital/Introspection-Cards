  
<template class="container mx-auto" >
    <div class="flex flex-col ">
        <h1 class="">{{ $t('titleGame1') }}</h1>
    </div>
    
    <div v-if="storeGame.actualStage === 'StageEnd'">
        <h2 class="text-2xl" >Primera Mano</h2>
        <div class="flex flex-nowrap overflow-x-auto overflow-y-auto overflow-x-scroll">
            <Card @click="isOpen = true; storeCards.addCardsToList(card)" v-for="card in storeCards.cardsSelected " :key="card.id" :="card" >
            </Card>
            <UButton to="/stepA" @click="storeGame.setGameStage1('StageA')">Star Game</UButton>                    
        </div>
    </div>

    <div v-else>

        <h2 class="text-2xl" >Test</h2>
        <div class="flex flex-nowrap overflow-x-auto overflow-x-scroll">
            <Card2 @click="storeCards.addCardsToList(card)" v-for="card in cardsB" :key="card.id" :="card" ></Card2>
        </div>
    </div>
    <div>
        <UModal v-model="isOpen">
        <div class="p-4">
            <Card v-on:click="storeGame.setGameStage1('StageB')" v-for="card in storeCards.cardsSelected " :key="card.id" :="card"> </Card>
            <UButton to="/decks" @click="storeGame.setGameStage1('StageB')">Next</UButton>            
        </div>
        </UModal>
    </div>
    <div>
        <p>{{ store.getCardslist }}</p>        
    </div>

    <div @click="store.addCard" >
        <p>{{ lista }}</p>        
    </div>

</template>
<script setup lang="ts">
import { mapState, mapStores } from 'pinia';
import { cardsA, cardsB, cardsC } from '~/data/cards.json'

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
const isOpenB = ref(false)
const isOpenC = ref(false)

const route = useRoute()
const { data } = await useAsyncData(async () => {
  return await $fetch(`~/server/api/cards.json`)
})

console.log(locale.value)


</script> 