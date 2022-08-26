<script setup lang="ts">
import TheTelephoneButton from './components/TheTelephoneButton.vue';
</script>

<template>
  <header id="qn-header">
    <h1>Queen Nails</h1>
    <TheTelephoneButton />
  </header>

  <main id="qn-main">
    <router-view />
  </main>
</template>

<style scoped></style>
