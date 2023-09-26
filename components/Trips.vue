<template>
  <div class="bg-LightGrey pb-20">
    <div class="flex gap-6 justify-center -mt-12">
      <div v-for="trip in Trips">
        <NuxtLink :to="`/ture/${trip._id}`" class="relative">
          <div class="h-96 w-80 overflow-hidden">
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
    <div class="text-center pt-6">
      <NuxtLink to="/ture" class="font-light"
        >Vores ture <font-awesome-icon icon="fa-solid fa-arrow-right" />
      </NuxtLink>
    </div>
  </div>
</template>
<script setup>
const { data: Trips } = await useFetch("http://localhost:4444/tours");
</script>
