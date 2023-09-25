<template>
  <div style="height: 400px; width: 400px">
    <LMap
      ref="map"
      :zoom="zoom"
      :center="[56.41186050933922, 10.895842997732931]"
    >
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        layer-type="base"
        name="OpenStreetMap"
      />
      <l-marker :lat-lng="[56.408871184727495, 10.881021371885522]">
        <l-icon :icon-url="iconUrl"></l-icon>
      </l-marker>
    </LMap>
  </div>
</template>

<script setup>
import { ref } from "vue";
const zoom = ref(11);
const publicPath = import.meta.env.BASE_URL;

const iconUrl = `${publicPath}assets/icons/map-marker.png`;
</script>

<style>
body {
  margin: 0;
}
</style>
