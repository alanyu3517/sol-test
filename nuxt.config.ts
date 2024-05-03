import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  //...
  build: {
    transpile: ['vuetify', '@solana/web3.js', '@solana/wallet-adapter-base'],
  },
  css: ['@/assets/scss/style.scss'],
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({autoImport: true}));
      });
    },
    //...
  ],
  vite: {
    esbuild: {
      target: 'esnext',
    },
    build: {
      target: 'esnext',
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    optimizeDeps: {
      include: ['@solana/web3.js', '@solana/wallet-adapter-base', '@project-serum/anchor', 'buffer'],
      esbuildOptions: {
        target: 'esnext',
      },
    },
    define: {
      "process.env.BROWSER": true,
    },
  },
  nitro: {
    rollupConfig: {
      external: ['borsh', 'util', 'secp256k1', '@solana/web3.js', '@solana/wallet-adapter-phantom', '@solana/wallet-adapter-base'],
    },
  },
});
