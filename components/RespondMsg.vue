<template>
  <!-- respons message -->
  <div
    class="bg-Aqua p-3 h-52 w-80 fixed bottom-6 z-50 right-6"
    v-if="displayRes"
  >
    <div
      class="float-right cursor-pointer border-black border-2 py-1 px-2 hover:text-white hover:border-white"
      @click="displayRes = !displayRes"
    >
      <font-awesome-icon icon="fa-solid fa-xmark" />
    </div>
    <div class="flex justify-center items-center h-full">
      <p class="text-center my-auto text-white">
        {{ msg }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  msg: {
    type: String,
    default: "",
  },
  displayRes: {
    type: Boolean,
    default: false,
  },
});
</script>
