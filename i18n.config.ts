import { Title } from "#build/components";

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
      en: {
        welcome: 'Welcome',
        navHome: 'Home',
        navAboutUs: 'About Us',
        navContact: 'Contact',
        fileDeck1: '~/data/cards-en.json',
        descriptionGame1: ''
      },
      es: {
        welcome: 'Bienvenido',
        navHome: 'Inicio',
        navAboutUs: 'Nosotros',
        navContact: 'Contacto',
        fileDeck1: '~/data/cards-es.json',
        descriptionGame1: ''
      }
    }
  }))