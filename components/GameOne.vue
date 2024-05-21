  
<template >
    
    <div v-if="storeGame.actualStage === 'StageEnd'">
        <h2 class="text-2xl mb-4 mt-8" >Los tres Pasos</h2>
        <div class="flex flex-row overflow-x-auto overflow-x-scroll h-fit">
            <Card v-for="card in storeCards.cardsSelected" :key="card.id" :="card" >
            </Card>
        </div>
        <UButton class="mx-4 my-8" to="/stepA" @click="storeGame.setGameStage1('StageA');storeGame.deleteSelected()">{{ $t('newGame') }}</UButton>                    
    </div>

    <div v-else>
        <div class="flex flex-col mx-8 justify-content-center items-center ">
            <h2 class="text-xl my-4" >{{ $t('newQuest') }}</h2>
            <UButton class="w-32" to="/stepA" @click="storeGame.setGameStage1('StageA'); storeGame.deleteSelected()">{{ $t('newGame') }}</UButton> 
        </div>
    </div>
    <div>
    </div>
</template>
<script setup lang="ts">
import { cardsA, cardsB, cardsC } from '~/data/cards.json'

const storeCards = useCardsSelectedStore()
const storeGame = useCardsSelectedStore()

const randomStorage = storeCards.cardsSelected.sort(function() { return Math.random() - 0.5 })

const { locale, setLocale } = useI18n()

const route = useRoute()
const { data } = await useAsyncData(async () => {
  return await $fetch(`~/server/api/cards.json`)
})

console.log(locale.value)


</script> 