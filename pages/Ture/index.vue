<template>
  <div>
    <Banner image="banner-ture" title="Ture" />
    <section class="container max-w-5xl mx-auto py-20">
      <div v-for="tour in tours.slice(indexStart, indexEnd)">
        <Tur :turInfo="tour" />
      </div>

      <!-- Pagination -->
      <div class="container max-w-6xl mx-auto flex justify-center">
        <div class="flex flex-row gap-2">
          <!-- Prev button -->
          <button
            class="w-12 h-12 rounded-full text-center border border-platinum hover:text-Aqua"
            @click="prev"
            :disabled="current <= 1"
            :class="{ ' text-gray-500': current <= 1 }"
          >
            <font-awesome-icon icon="fa-solid fa-caret-left" />
          </button>

          <!-- page number buttons -->
          <div v-for="i in Math.ceil(tours.length / pageSize)">
            <button
              class="w-12 h-12 rounded-full text-center border border-platinum hover:text-Aqua"
              :class="{ ' text-Aqua': i === current }"
              @click="goToPage(i)"
            >
              {{ i }}
            </button>
          </div>

          <!-- Next button -->
          <button
            class="w-12 h-12 rounded-full text-center border border-platinum hover:text-Aqua"
            @click="next"
            :disabled="current >= Math.ceil(tours.length / pageSize)"
            :class="{
              ' text-gray-500': current >= Math.ceil(tours.length / pageSize),
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
const pageSize = ref(2); // Replace with your actual page size value

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
