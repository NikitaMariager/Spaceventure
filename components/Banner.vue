<template>
  <div class="h-96 relative">
    <img
      :src="`_nuxt/assets/images/${image}.jpg`"
      alt=""
      class="w-full h-full object-cover animate-wiggleUp"
    />

    <h1
      class="absolute top-1/2 text-white text-4xl left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      {{ title }}
    </h1>
  </div>
</template>
<script setup>
const props = defineProps({
  image: {
    type: String,
    required: true,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
});
</script>
