<template>
    <h1>Component Deck</h1>
    <div class="flex flex-row">
        
        <Card v-for="card in cards" :key="card.id" :="card" class="grow"></Card>
    </div>
</template>

<script setup lang="ts">
import { cards } from '~/server/api/cards.json'
</script>