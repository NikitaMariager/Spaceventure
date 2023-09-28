<template>
  <div class="pb-20">
    <h2 class="text-center mb-16 font-semibold text-4xl">Vores team</h2>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div v-for="member in team">
        <div class="w-full relative mt-16">
          <div
            class="w-fit p-2 bg-white rounded-full -mb-16 absolute left-1/2 -translate-x-1/2 -top-20"
          >
            <img
              :src="`http://localhost:4444/images/team/${member.image}`"
              :alt="`avatar image ${member.name}`"
              class="mx-auto rounded-full"
            />
          </div>

          <div class="text-center bg-LightGrey pt-20 pb-10">
            <h4 class="font-semibold">{{ member.name }}</h4>
            <p class="text-Aqua text-sm pb-3">{{ member.role }}</p>

            <NuxtLink :to="`tel:${member.phone}`" class="font-light">{{
              member.phone
            }}</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: team } = await useFetch("http://localhost:4444/team");
</script>
