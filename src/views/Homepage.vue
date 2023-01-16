<template>
  <ThePhotoGallery/>
  <ThePreisliste/>
  <BaseHorizontalLine />
  <TheKontakt />
  <BaseHorizontalLine />
  <TheOeffnungszeiten />
</template>

<script setup lang="ts">
import ThePreisliste from '../components/preisliste/ThePreisliste.vue';
import TheKontakt from '../components/TheKontakt.vue';
import TheOeffnungszeiten from '../components/TheOeffnungszeiten.vue';
import BaseHorizontalLine from '../components/BaseHorizontalLine.vue';
import ThePhotoGallery from '../components/ThePhotoGallery.vue';
</script>
