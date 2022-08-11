<template>
  <div class="mapouter" :style="{ height: mapDimension, width: mapDimension }">
    <div class="gmap_canvas" :style="{ height: mapDimension, width: mapDimension }">
      <iframe
        :height="mapDimension"
        :width="mapDimension"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=Steinweg%2020%20Coburg&t=&z=17&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe
      ><br />
    </div>
  </div>
</template>

<script setup lang="ts">
const maxDimension = 650;
let mapDimension = Math.min(window.innerWidth, maxDimension);
</script>
<style scoped>
.mapouter {
  position: relative;
  text-align: right;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
}
</style>
