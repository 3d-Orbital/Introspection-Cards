export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
      en: {
        welcome: 'Welcome',
        navHome: 'Home',
        navAboutUs: 'About Us',
        navContact: 'Contact'
      },
      es: {
        welcome: 'Bienvenido',
        navHome: 'Inicio',
        navAboutUs: 'Nosotros',
        navContact: 'Contacto'
      }
    }
  }))