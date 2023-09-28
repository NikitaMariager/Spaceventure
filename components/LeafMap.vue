<template>
  <div>
    <div class="max-w-6xl w-full h-[400px] relative z-40">
      <LMap v-if="coordinates" ref="map" :zoom="zoom" :center="coordinates">
        <LTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          layer-type="base"
          name="OpenStreetMap"
        />
        <l-marker :lat-lng="coordinates">
          <l-icon :icon-url="iconUrl"></l-icon>
        </l-marker>
      </LMap>
    </div>
  </div>
</template>

<script setup>
const { data: info } = await useFetch("http://localhost:4444/footer");
const zoom = ref(11);
let coordinates = ref(null);

const publicPath = import.meta.env.BASE_URL;

const iconUrl = `${publicPath}assets/icons/position.png`;

onMounted(() => {
  if (info.value.coordinates) {
    // Split the coordinates string into latitude and longitude
    const [lat, lng] = info.value.coordinates.split(",");
    coordinates.value = [lat, lng];
  }
});
</script>

<style>
body {
  margin: 0;
}
</style>
