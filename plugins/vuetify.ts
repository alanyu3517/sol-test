// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css';

import 'vuetify/styles';
import {createVuetify, type ThemeDefinition} from 'vuetify';
import { defineNuxtPlugin } from 'nuxt/app';

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#f5faf9',
    surface: '#f5faf9',
    primary: '#57c1af',
    secondary: '#9ec1dc',
    accent: '#7992cd',
  },
}

const myCustomDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#050a09',
    surface: '#050a09',
    primary: '#3ea896',
    secondary: '#234661',
    accent: '#324b86',
  },
}

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      themes: {
        light: myCustomLightTheme,
        dark: myCustomDarkTheme,
      },
    }

  });
  app.vueApp.use(vuetify);
});
