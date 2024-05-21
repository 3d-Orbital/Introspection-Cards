  
<template >
    
    <div v-if="storeGame.actualStage === 'StageEnd'">
        <h2 class="text-2xl" >Los tres Pasos</h2>
        <div class="flex flex-nowrap overflow-x-auto overflow-y-auto overflow-x-scroll">
            <Card @click="isOpen = true; " v-for="card in storeCards.cardsSelected " :key="card.id" :="card" >
            </Card>
        </div>
        <UButton to="/stepA" @click="storeGame.setGameStage1('StageA');storeGame.deleteSelected()">Star Game</UButton>                    
    </div>

    <div v-else>
        <h2 class="text-2xl" >New Test</h2>
        <div class="flex flex-nowrap overflow-x-auto overflow-x-scroll">
            
            <UButton to="/stepA" @click="storeGame.setGameStage1('StageA'); storeGame.deleteSelected()">Star Game</UButton> 
        </div>
    </div>
    <div>
        <UModal v-model="isOpen">
        <div class="p-4">
            <Card v-on:click="storeGame.setGameStage1('StageEnd')" v-for="card in storeCards.cardsSelected " :key="card.id" :="card"> </Card>
            <UButton @click="storeGame.setGameStage1('StageEnd')">Next</UButton>            
        </div>
        </UModal>
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


async function nametakeScreenshot() {
      const canvas = this.$refs.canvas.getContext('2d')
      const ctx = canvas.getContext('2d')
      ctx.drawImage(document.documentElement, 0, 0, canvas.width, canvas.height)
      const dataURL = canvas.toDataURL('image/png')
      const link = document.createElement('a')
      link.href = dataURL
      link.download = 'screenshot.png'
      link.click()
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