import { Title } from "#build/components";

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
      en: {
        welcome: 'Welcome',
        navHome: 'Home',
        navDecks: 'Decks',
        navContact: 'Contact',
        fileDeck1: '~/data/cards-en.json',
        titleGame1: 'Game: Three Colors Card',
        descriptionGame1: 'You have just embarked on a discovery through an exercise with cards. If this is your reality in your case follow the tips we give you for a much more harmonious journey.'
      },
      es: {
        welcome: 'Bienvenido',
        navHome: 'Inicio',
        navDecks: 'Mazos',
        navContact: 'Contacto',
        fileDeck1: '~/data/cards-es.json',
        titleGame1: 'Juego: Carta de Tres Colores',
        descriptionGame1: 'Acabas de embarcarte en un descubrimiento mediante un ejercicio de cartas. Si es tu realidad en tu caso toma el consejo que te damos para un viaje mucho más armonioso.'
      }
    }
  }))