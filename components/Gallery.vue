<template>
  <div class="grid grid-cols-4 gap-6 pb-6">
    <div v-for="img in gallery">
      <div class="w-full h-full">
        <img
          :src="`http://localhost:4444/images/gallery/${img.image}`"
          :alt="img.imagetext"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: gallery } = await useFetch("http://localhost:4444/gallery");
</script>
