<template>
  <h1>KONTAKT</h1>
  <div class="contact-box">
    <p>Besuchen Sie uns gerne mit oder ohne Termin!</p>
    <p>Steinweg 20</p>
    <p>96450 Coburg</p>
    <p>Tel.: {{ MOBILE_NUMBER }}</p>
  </div>
  <TheGoogleMap />
</template>

<script setup lang="ts">
import TheGoogleMap from './TheGoogleMap.vue';
import { MOBILE_NUMBER } from '../config/telephone-number';
</script>

<style scoped lang="scss">
.contact-box {
  padding: 0 1rem 1rem;
  p {
    text-align: center;
  }
}
</style>
