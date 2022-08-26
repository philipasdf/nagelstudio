<template>
  <div class="mapouter" :style="{ height: mapHeight, width: mapWidth }">
    <div class="gmap_canvas" :style="{ height: mapHeight, width: mapWidth }">
      <iframe
        :height="mapHeight"
        :width="mapWidth"
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
let mapWidth = Math.min(window.innerWidth, maxDimension);
let mapHeight = mapWidth * 0.666;
</script>
<style scoped>
.mapouter {
  position: relative;
  text-align: right;
  z-index: -1;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
}
</style>
