import { defineStore } from "pinia";
import type Cards from "~/components/Cards.vue";

export const useCardsStore = defineStore('cardsStore', {
    state: () => ({
        cardsSelected:[]
    }),
    getters: {
        getCardslist (state){
            return state.cardsSelected
        }
    },
    actions: {
        async addCard(card: object){
            this.cardsSelected.push(card)
        }
    },

})