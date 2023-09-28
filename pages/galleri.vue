<template>
  <div class="h-[70vh] overflow-scroll mb-4 overscroll-auto relative">
    <!-- Display modal -->
    <div v-if="display" class="fixed top-0 z-50 w-full h-full">
      <div
        class="bg-[#34374299] w-full h-full p-12 m-auto top-0 left-0 backdrop-blur-md"
      >
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div class="bg-white relative max-w-4xl mx-auto">
            <div
              @click="closeModal()"
              :data="modalData"
              class="text-white opacity-70 hover:opacity-100 text-4xl absolute top-4 right-4 cursor-pointer"
            >
              <font-awesome-icon icon="fa-regular fa-rectangle-xmark" />
            </div>

            <div>
              <img :src="modalId" alt="" class="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex transition-[2s] p-4 gap-4">
      <!-- gallery colum -->
      <div class="flex flex-col w-1/3 md:w-1/4 gap-4">
        <div v-for="(star, index) in Array.apply(null, { length: 24 })">
          <div
            class="w-full overflow-hidden"
            @click="
              openModal(
                item,
                `https://source.unsplash.com/random?nasa?sig={{${index}}}`
              )
            "
          >
            <img
              :src="`https://source.unsplash.com/random?nasa?sig={{${index}}}`"
              alt=""
              class="grayscale w-full h-full hover:grayscale-0 hover:scale-105 transition duration-200"
            />
          </div>
        </div>
      </div>
      <!-- gallery colum -->
      <div class="flex flex-col w-1/3 md:w-1/4 gap-4">
        <div v-for="(star, index) in Array.apply(null, { length: 24 })">
          <div
            class="w-full overflow-hidden"
            @click="
              openModal(
                item,
                `https://source.unsplash.com/random?spaceship?sig={{${index}}}`
              )
            "
          >
            <img
              :src="`https://source.unsplash.com/random?spaceship?sig={{${index}}}`"
              alt=""
              class="grayscale w-full h-full hover:grayscale-0 hover:scale-105 transition duration-200"
            />
          </div>
        </div>
      </div>
      <!-- gallery colum -->
      <div class="flex flex-col w-1/3 md:w-1/4 gap-4">
        <div v-for="(star, index) in Array.apply(null, { length: 24 })">
          <div
            class="w-full overflow-hidden"
            @click="
              openModal(
                item,
                `https://source.unsplash.com/random?moon?sig={{${index}}}`
              )
            "
          >
            <img
              :src="`https://source.unsplash.com/random?moon?sig={{${index}}}`"
              alt=""
              class="grayscale w-full h-full hover:grayscale-0 hover:scale-105 transition duration-200"
            />
          </div>
        </div>
      </div>
      <!-- gallery colum -->
      <div class="w-1/4 gap-4 hidden md:flex flex-col">
        <div v-for="(star, index) in Array.apply(null, { length: 24 })">
          <div
            class="w-full overflow-hidden"
            @click="
              openModal(
                item,
                `https://source.unsplash.com/random?planets?sig={{${index}}}`
              )
            "
          >
            <img
              :src="`https://source.unsplash.com/random?planets?sig={{${index}}}`"
              alt=""
              class="grayscale w-full h-full hover:grayscale-0 hover:scale-105 transition duration-200"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const display = ref(false);
const modalData = ref(null);
const modalId = ref("");

function openModal(data, i) {
  modalData.value = data;
  modalId.value = i;
  display.value = true;
}

function closeModal() {
  display.value = false;
}
</script>
