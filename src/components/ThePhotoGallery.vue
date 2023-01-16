<template>
  <div class="img-container">
    <img :class="{'fade-in': animationToggle}" v-bind:src="imgs[currIdx]" alt="Nagelstudio Gallerie"/>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const imgs = [
  'https://lh3.googleusercontent.com/WXunxugT6SySrCIIBVaPXp6sAONkzyeYIC73ddVHTnNh7QZ_RDCRcTSGLb_Q2D7N-B5iFauBwf2zvvXgoctN91K5KN4ii1ZNAnd9jtXvb-uumD6Ujq98PnYCkZiP3WFM_yVybHzGyQ=w2400',
  'https://lh3.googleusercontent.com/rHVDZ6VVWh9u9tpmzFU1yQrq03i5nR0ld23eiJTgYKfdAEqxg348lI5UKB8jif_5dqvKFGV9Ok-tjZA6Yhhz91II_qquVwfeoNFeffTk3SySet9s3ofCwHs-viGnMepVWDEugIM41A=w2400',
  'https://lh3.googleusercontent.com/VdxDlL5QaGIMVrMJs1myaRCMmQJPWxjW9NDQwjqQiLRKWiQsy0jruS7NLD5LtzA4OPiCm9NGnKUUF_r5hiFz3Bj8tH4kpPifXiGqR5jiV_kMyFHglLOBRwvCB9yMA5a1zp_Flv7ydA=w2400'
]

let currIdx = ref(0);
let animationToggle = ref(true);

onMounted(() => {
  setInterval(() => {
    animationToggle.value = false;
    if (currIdx.value < imgs.length - 1) {
      currIdx.value++;
    } else {
      currIdx.value = 0;
    }
    setTimeout(() => {
      animationToggle.value = true;
    }, 0);
    
  }, 5000);
})
</script>

<style scoped lang="scss">
  img {
    width: 100%;
    max-height: 366px;
    object-fit: cover;
  }

  .img-container {
    max-height: 366px;
  }
@media (min-width: 1024px) {

  .img-container {
    max-height: 400px;
  }

  img {
    max-height: 330px;
  }
}
</style>
