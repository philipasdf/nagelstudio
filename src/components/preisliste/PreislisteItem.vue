<template>
  <div class="details">
    <h3>{{ props?.name }}</h3>
    <div class="preis-items">
      <p v-for="item in props?.items">
        <span>{{ item.beschreibung }}</span>
        <span>{{ item.preis }} €</span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PreisAbschnitt } from './preisliste-config';

/* 
const preisAbschnitt = defineProps<PreisAbschnitt>(); 
currently not possible
https://youtrack.jetbrains.com/issue/WEB-54034/Vue-3-script-setup-support-defineProps-with-reference-to-interface-or-object-literal-type
*/
defineProps({
  props: Object as () => PreisAbschnitt,
});
</script>

<style scoped lang="scss">
.preis-items {
  p {
    display: flex;
    justify-content: space-between;
  }
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}
</style>
