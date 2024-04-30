import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt'],
  tailwindcss: {
    cssPath: join(currentDir, './assets/css/tailwind.css'),
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
  vite: {
    optimizeDeps: {
      include: ['@solana/web3.js', '@solana/wallet-adapter-base'],
    },
  },
  build: {
    transpile: ['@solana/web3.js', '@solana/wallet-adapter-base'],
  },
  nitro: {
    rollupConfig: {
      external: ['borsh', 'util', 'secp256k1', '@solana/web3.js', '@solana/wallet-adapter-phantom', '@solana/wallet-adapter-base'],
    },
  },
});
