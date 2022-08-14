<script setup lang="ts">
import { MOBILE_NUMBER } from './config/telephone-number';
import TheTelephoneButton from './components/TheTelephoneButton.vue';
</script>

<template>
  <header id="qn-header">
    <h1>Queen Nails</h1>
    <div class="contact-box">
      <p>Steinweg 20, 96450 Coburg</p>
      <p>{{ MOBILE_NUMBER }}</p>
    </div>
    <!-- TODO make this oeffnungszeiten <HelloWorld msg="You did it!" />  -->
    <TheTelephoneButton />
  </header>

  <main id="qn-main">
    <router-view />
  </main>
</template>

<style scoped></style>
