<script setup lang="ts">
import PreislisteItem from './PreislisteItem.vue';
</script>

<template>
  <PreislisteItem>
    <template #heading>NAIL ART</template>
    <div class="test">
      <p>
        <span>Airbrush Design pro Nagel</span>
        <span>3€</span>
      </p>
      <p>
        <span>Hand Design pro Nagel</span>
        <span>3€</span>
      </p>
      <p>
        <span>Airbrush-Hand-Design komplett</span>
        <span>15€</span>
      </p>
      <p>
        <span>Strasssteine</span>
        <span>0,50€</span>
      </p>
    </div>
    Airbrush Design pro Nagel This project is served and bundled with
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite</a>. The recommended IDE setup is
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a> +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>. If you need to test your components and
    web pages, check out <a href="https://www.cypress.io/" target="_blank">Cypress</a> and
    <a href="https://on.cypress.io/component" target="_blank">Cypress Component Testing</a>.

    <br />

    More instructions are available in <code>README.md</code>.
  </PreislisteItem>
  <PreislisteItem>
    <template #heading>BASIC</template>

    Get official tools and libraries for your project:
    <a target="_blank" href="https://pinia.vuejs.org/">Pinia</a>,
    <a target="_blank" href="https://router.vuejs.org/">Vue Router</a>,
    <a target="_blank" href="https://test-utils.vuejs.org/">Vue Test Utils</a>, and
    <a target="_blank" href="https://github.com/vuejs/devtools">Vue Dev Tools</a>. If you need more resources, we
    suggest paying
    <a target="_blank" href="https://github.com/vuejs/awesome-vue">Awesome Vue</a>
    a visit.
  </PreislisteItem>
</template>
<style scoped>
.test p {
  line-height: 1rem;
  display: flex;
  justify-content: space-between;
}
</style>
