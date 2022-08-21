<template>
  <div></div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
div {
  margin-top: 2rem;

  &::before {
    background-color: #000;
    content: '';
    display: block;
    height: 1px;
    position: relative;
    width: 3rem;
    margin: auto;
    z-index: -1;
  }
}
</style>
