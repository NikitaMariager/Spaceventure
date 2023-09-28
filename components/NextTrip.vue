<template>
  <div class="flex justify-center pt-12">
    <div>
      <p class="text-xl font-bold">Næste tur:</p>

      <CountDown :launchDate="closestTrip.spacelaunch" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  trips: {
    type: Array,
  },
});

const closestTrip = computed(() => {
  const now = new Date();
  const sortedTrips = props.trips.slice().sort((a, b) => {
    const dateA = new Date(a.spacelaunch);
    const dateB = new Date(b.spacelaunch);
    return dateA - dateB;
  });

  for (const trip of sortedTrips) {
    const tripDate = new Date(trip.spacelaunch);
    if (tripDate >= now) {
      return trip;
    }
  }

  return null; // If no future trip is found
});
</script>
