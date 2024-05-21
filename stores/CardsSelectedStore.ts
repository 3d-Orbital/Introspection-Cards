// store/CardsSelectedStore.ts
import { defineStore } from 'pinia'

export const useCardsSelectedStore = defineStore('cardsSelectedStore', () => {
  const cardsSelected = ref([])
  const lastCardSelected = ref([])
  const gameStage = ref(['StageA','StageB','StageC','StageEnd'])
  const actualStage = ref('')

  async function addCardsToList(value: object) {
    cardsSelected.value.push(value);
  }
  async function addLastCardsSelected (value: object) {
    
    lastCardSelected.value.push(value)
  }
  async function setGameStage1(value: string) {
    if (gameStage.value[0] == value) {
      actualStage.value = gameStage.value[0]
      console.log(actualStage.value)
    }else if (gameStage.value[1] == value){
      actualStage.value = gameStage.value[1]
      console.log(actualStage.value)
    }else if (gameStage.value[2] == value){
      actualStage.value = gameStage.value[2]
      console.log(actualStage.value)
    }else if (gameStage.value[3] == value){
      actualStage.value = gameStage.value[3]
      console.log(actualStage.value)
    }else{
      console.log("Soo Wired")
    }
            
  }
  return { addCardsToList,addLastCardsSelected,setGameStage1,lastCardSelected, cardsSelected, gameStage, actualStage }
})