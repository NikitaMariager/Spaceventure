<template>
  <div class="bg-LightGrey pb-20">
    <div
      class="flex flex-col md:flex-row gap-6 justify-between md:justify-center py-12 md:py-0 md:-mt-12"
    >
      <div v-for="trip in Trips.slice(0, 2)">
        <NuxtLink :to="`/ture/${trip._id}`" class="relative">
          <div class="h-80 md:h-96 w-fit mx-12 md:w-80 overflow-hidden">
            <img
              :src="`http://localhost:4444/images/tours/${trip.image1}`"
              class="object-cover w-full h-full hover:scale-125 transition duration-300"
              alt="..."
            />
          </div>
          <h2
            class="absolute bottom-6 w-full text-center text-white font-semibold text-xl"
          >
            {{ trip.destination }}
          </h2>
        </NuxtLink>
      </div>
    </div>
    <div class="pt-6 flex justify-center items-center group">
      <NuxtLink to="/ture" class="font-light flex gap-3 w-fit"
        >Vores ture
        <div class="flex items-center">
          <div
            class="w-6 -mr-1 h-[3px] bg-black group-hover:w-8 transition-all duration-200"
          ></div>
          <font-awesome-icon icon="fa-solid fa-caret-right" />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
<script setup>
const { data: Trips } = await useFetch("http://localhost:4444/tours");
</script>
