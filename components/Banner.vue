<template>
  <div class="h-52 md:h-96 overflow-hidden">
    <div
      class="h-40 md:h-80 transition-all ease-in-out animate-wiggleUp relative"
    >
      <img
        :src="`_nuxt/assets/images/${image}.jpg`"
        alt=""
        class="w-full h-full animate-wiggleUp object-cover"
      />
      <h1
        class="absolute top-1/2 text-white text-4xl left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        {{ title }}
      </h1>
    </div>
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
