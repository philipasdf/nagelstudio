<template>
  <button :class="{ 'extra-span-text-flies-in': isButtonTransformed }" @click="onClick">
    {{ buttonText }}<span>jetzt anrufen</span>
  </button>
</template>

<script setup lang="ts">
import { MOBILE_NUMBER, MOBILE_NUMBER_INTERNATIONAL } from '@/config/telephone-number';
import { ref } from 'vue';

const BUTTON_TEXT_BEFORE_TRANSFORMED = 'Termin vereinbaren';
const BUTTON_TEXT_AFTER_TRANSFORMED = MOBILE_NUMBER;

let buttonText = ref(BUTTON_TEXT_BEFORE_TRANSFORMED);
let isButtonTransformed = ref(false);

function onClick() {
  if (isButtonTransformed.value) {
    window.open('tel:' + MOBILE_NUMBER_INTERNATIONAL);
  }
  isButtonTransformed.value = true;
  buttonText.value = BUTTON_TEXT_AFTER_TRANSFORMED;
}
</script>

<style scoped lang="scss">
button {
  --button-width: 215px;
  --button-width-growed: 330px;

  // button position
  position: absolute;
  top: 160px;
  right: 1rem;

  // style
  font-weight: bold;
  font-size: 1rem;
  color: white;
  border: 5px solid transparent;
  background: var(--nails-corporate-color);
  border-radius: 40px;
  border: 2px solid white;
  padding: 15px 30px;

  // long text should not increase button-size
  white-space: nowrap;
  overflow: hidden;

  // animation
  width: var(--button-width);
  transition: all 1.2s, border 0.5s 1.2s, box-shadow 0.3s 1.5s;

  span {
    padding-left: 0.75rem;
    display: inline-block;
    transform: translateX(300px);
    font-weight: normal;
    opacity: 0;
    transition: opacity 0.1s 0.5s, transform 0.4s 0.5s;
  }
  &.extra-span-text-flies-in {
    background: var(--nails-corporate-color);
    width: var(--button-width-growed);
    border: 6px solid var(--nails-corporate-color-light);
    box-shadow: 3px 3px 2px rgba(black, 0.15);
    span {
      transform: translateX(0);
      opacity: 1;
    }
  }
}

@media (min-width: 1024px) {
  button {
    position: absolute;
    top: 235px;
  }
}
</style>
