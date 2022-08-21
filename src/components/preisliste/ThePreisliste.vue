<template>
  <h1>PREISE</h1>
  <PreislisteItem v-for="preisAbschnitt in preisAbschnitte" :props="preisAbschnitt"></PreislisteItem>
</template>

<script setup lang="ts">
import PreislisteItem from './PreislisteItem.vue';
import { PREISE } from './preisliste-config';

const preisAbschnitte = PREISE;
</script>

<style scoped></style>
