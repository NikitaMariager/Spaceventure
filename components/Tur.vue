<template>
  <div>
    <div
      class="flex flex-col md:flex-row mb-10 border-[1px] border-LightGrey mx-6"
    >
      <div class="w-full md:w-1/2">
        <img
          :src="`http://localhost:4444/images/tours/${turInfo.image1}`"
          alt=""
          class="w-full h-full object-cover"
        />
      </div>

      <div class="relative w-full md:w-1/2">
        <div
          class="pricemark bg-Aqua px-3 pt-6 pb-10 uppercase text-white w-fit absolute right-0"
        >
          {{ turInfo.price }}
        </div>

        <div class="p-12 md:p-20 mb-6">
          <h3 class="text-xl">{{ turInfo.title }}</h3>
          <div
            v-html="turInfo.content"
            class="line-clamp-3 overflow-hidden text-BlueGrey mb-3 content"
          ></div>
          <CountDown :launchDate="turInfo.spacelaunch" />

          <div class="mt-6">
            <NuxtLink
              :to="`/ture/${turInfo._id}`"
              class="border-2 border-black py-3 px-8 transition-all duration-200 hover:border-Aqua hover:bg-Aqua"
              >Se mere</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  turInfo: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.pricemark {
  clip-path: polygon(0% 0%, 100% 0, 100% 81%, 27% 81%, 0 59%);
}
</style>
