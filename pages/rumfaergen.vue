<template>
  <div>
    <Banner image="banner-spaceship" title="Rumfærgen" />
    <main class="container max-w-6xl mx-auto">
      <section class="flex flex-col md:flex-row gap-20 py-6 md:py-20 mx-6">
        <div class="w-full md:w-1/2">
          <img
            :src="`http://localhost:4444/images/spacecraft/${about.image}`"
            alt="om os- billede af jordkloden genne vinduet på en space-shuttle"
            class="w-full h-full object-cover"
          />
        </div>

        <div class="w-full md:w-1/2 flex flex-col justify-between">
          <div>
            <h3 class="text-5xl text-gray-200 font-extralight">
              Hvorfor vælge os
            </h3>
            <div class="mt-6 border-b-2 border-r-gray-400 w-full block mb-6">
              <h2
                class="uppercase -mb-[2px] pb-2 text-Aqua border-b-4 border-b-Aqua inline-block font-light"
              >
                {{ about.title }}
              </h2>
            </div>
            <div v-html="about.content"></div>
          </div>
        </div>
      </section>
    </main>
    <section class="">
      <h3 class="text-center text-3xl pb-6 font-medium">Galleri</h3>
      <Gallery />
    </section>
  </div>
</template>

<script setup>
const { data: about } = await useFetch("http://localhost:4444/spacecraft");
</script>
