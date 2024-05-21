  
<template >
    <div class="flex flex-row justify-center my-4 gap-4">
        <h2 class="text-2xl">{{ $t('chooseCard') }}</h2>
        <UButton @click="storeGame.setGameStage1('StageA')">{{ $t('showCards') }}</UButton>
    </div>
    <div v-if="storeGame.actualStage === 'StageA'">
        <h2 class="text-xl m-8" >{{ $t('hand1') }}</h2>
        <div class="flex flex-nowrap overflow-x-auto overflow-y-auto overflow-x-scroll">
            <Card @click="isOpen = true; storeCards.addCardsToList(card)" v-for="card in randomStorageA" :key="card.id" :="card" >
            </Card>      
        </div>
    </div>    
    <div>
        <UModal v-model="isOpen">
        <div class="flex flex-col items-stretch p-4 ">
            <Card class="self-center" v-on:click="storeGame.setGameStage1('StageB')" v-for="card in storeCards.cardsSelected " :key="card.id" :="card"> </Card>
            <UButton  class="self-center my-4 w-28" to="/stepB">
                {{ $t('next') }}
                <template #trailing>
                    <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5" />
                </template>
            </UButton>
        </div>
        </UModal>
    </div>

</template>
<script setup lang="ts">
import { cardsA } from '~/data/cards.json'

const storeCards = useCardsSelectedStore()
const storeGame = useCardsSelectedStore()

const randomStorageA = cardsA.sort(function() { return Math.random() - 0.5 })

const { locale, setLocale } = useI18n()

const isOpen = ref(false)

const route = useRoute()
const { data } = await useAsyncData(async () => {
  return await $fetch(`~/server/api/cards.json`)
})

console.log(locale.value)


</script> 