<template>
  <div>
    <ClientOnly>
      <WalletMultiButton />
    </ClientOnly>
    <!-- <v-btn color="primary text-white" variant="flat" prepend-icon="mdi-wallet">
      <template v-slot:prepend>
        <v-icon color="white"></v-icon>
      </template>
      Connect Wallet
    </v-btn> -->
  </div>
</template>

<script lang="ts" setup>
import {WalletMultiButton} from 'solana-wallets-vue';
</script>
