<script lang="ts" setup></script>
<template>
  <v-app>
    <v-layout class="rounded rounded-md">
      <!-- Header -->
      <Header />
      <v-main>
        <slot />
      </v-main>
    </v-layout>
  </v-app>
</template>
