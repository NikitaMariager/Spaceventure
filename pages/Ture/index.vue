<template>
  <div>
    <Banner image="banner-ture" title="Ture" />
    <section class="container max-w-5xl mx-auto py-20">
      <div v-for="tour in tours.slice(indexStart, indexEnd)">
        <div class="flex mb-10 border-[1px] border-LightGrey">
          <div class="w-1/2">
            <img
              :src="`http://localhost:4444/images/tours/${tour.image1}`"
              alt=""
              class="w-full h-full object-cover"
            />
          </div>

          <div class="relative w-1/2">
            <div
              class="pricemark bg-Aqua px-3 pt-6 pb-10 uppercase text-white w-fit absolute right-0"
            >
              {{ tour.price }}
            </div>

            <div class="p-20 mb-6">
              <h3 class="text-xl">{{ tour.title }}</h3>
              <div
                v-html="tour.content"
                class="line-clamp-3 overflow-hidden text-BlueGrey mb-3 content"
              ></div>
              <CountDown :launchDate="tour.spacelaunch" />

              <div class="mt-6">
                <NuxtLink
                  :to="`/ture/${tour._id}`"
                  class="border-2 border-black py-3 px-8"
                  >Se mere</NuxtLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="container max-w-6xl mx-auto flex justify-center">
        <div class="flex flex-row gap-2">
          <!-- Prev button -->
          <button
            class="w-12 h-12 rounded-full text-center border border-platinum"
            @click="prev"
            :disabled="current <= 1"
            :class="{ ' bg-platinum': current <= 1 }"
          >
            <font-awesome-icon icon="fa-solid fa-caret-left" />
          </button>

          <!-- page number buttons -->
          <div v-for="i in Math.ceil(tours.length / pageSize)">
            <button
              class="w-12 h-12 rounded-full text-center border border-platinum"
              :class="{ ' text-Aqua': i === current }"
              @click="goToPage(i)"
            >
              {{ i }}
            </button>
          </div>

          <!-- Next button -->
          <button
            class="w-12 h-12 rounded-full text-center border border-platinum"
            @click="next"
            :disabled="current >= Math.ceil(tours.length / pageSize)"
            :class="{
              'bg-platinum': current >= Math.ceil(tours.length / pageSize),
            }"
          >
            <font-awesome-icon icon="fa-solid fa-caret-right" />
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { data: tours } = await useFetch("http://localhost:4444/tours");

const current = ref(1); // Replace with your actual current page value
const pageSize = ref(4); // Replace with your actual page size value

const indexStart = computed(() => (current.value - 1) * pageSize.value);
const indexEnd = computed(() => indexStart.value + pageSize.value);

function prev() {
  current.value--;
}

function next() {
  current.value++;
}

function goToPage(i) {
  current.value = i;
}
</script>

<style scoped>
.pricemark {
  clip-path: polygon(0% 0%, 100% 0, 100% 81%, 27% 81%, 0 59%);
}
</style>
