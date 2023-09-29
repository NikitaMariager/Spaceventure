<template>
  <div>
    <Banner image="safety" title="Sikkerhed" />
    <main class="container max-w-6xl mx-auto">
      <section class="flex flex-col-reverse md:flex-row gap-20 py-12 mx-6">
        <div class="w-full md:w-1/2">
          <img
            src="../assets/images/safety1.jpg"
            alt="om os- billede af jordkloden genne vinduet på en space-shuttle"
            class="w-full h-full object-cover"
          />
        </div>

        <div class="w-full md:w-1/2 flex flex-col justify-between">
          <div>
            <h2 class="text-5xl text-gray-200 font-extralight">Safety first</h2>
            <div class="mt-6 border-b-2 border-r-gray-400 w-full block mb-6">
              <h3
                class="uppercase -mb-[2px] pb-2 text-Aqua border-b-4 border-b-Aqua inline-block font-light"
              >
                {{ about.title }}
              </h3>
            </div>
            <div v-html="about.content"></div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
const { data: about } = await useFetch("http://localhost:4444/safety");
</script>
