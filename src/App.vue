<script setup lang="ts">
import TheTelephoneButton from './components/TheTelephoneButton.vue';
</script>

<template>
  <header id="qn-header">
    <h1 class="fade-in-slide-in-from-left">Queen Nails</h1>
    <TheTelephoneButton class="fade-in-slide-in-from-left"/>
  </header>

  <main id="qn-main" class="fade-in">
    <router-view />
  </main>
</template>

<style scoped></style>
