<template>
  <div class="carousel-container relative">
    <div
      class="h-[50vh] overflow-y-scroll snap-mandatory flex flex-col scroll-smooth image-carousel"
      ref="carouselContainer"
    >
      <div v-for="(slide, index) in slides" :key="index">
        <div class="flex-none snap-start h-[50vh] relative slide">
          <div class="absolute z-50 top-52 left-32">
            <div class="text-white my-6 container max-w-6xl mx-auto">
              <span class="uppercase">{{ slide.title }}</span>
              <h1 class="text-5xl font-normal">
                {{ removeLastWord(slide.content, lastWord(slide.content)) }}
                <span class="font-bold">{{ lastWord(slide.content) }} </span>
              </h1>
            </div>
          </div>

          <!-- slider image -->
          <div class="block h-full object-cover">
            <img
              :src="`http://localhost:4444/images/banner/${slide.image}`"
              class="object-cover w-full h-full"
              :alt="`title: ${slide.title}, beskrivelse: ${slide.content}`"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="absolute right-24 top-1/2">
      <div
        v-for="(slideNav, index) in Array.apply(null, { length: totalImages })"
        class="flex flex-col p-1"
      >
        <div
          class="w-3 h-3 opacity-80"
          :class="index === currentIndex ? 'bg-Aqua' : 'bg-LightGrey'"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: slides } = await useFetch("http://localhost:4444/banner");

const slide = ref([]);

const carouselContainer = ref(null);

let slideTimeout = null; // Define slideTimeout

let currentIndex = ref(0);
let prevIndex = ref(null);

const totalImages = ref(null);

function lastWord(sentence) {
  let word = sentence.split(" ").splice(-1);
  return word[word.length - 1];
}

function removeLastWord(sentence, word) {
  const firstSentence = sentence.replace(word, "");
  return firstSentence;
}

function nextSlide() {
  const container = carouselContainer.value;
  prevIndex.value = currentIndex.value;

  currentIndex.value = currentIndex.value + 1;

  if (currentIndex.value === totalImages.value) {
    container.scrollTo(0, 0);
    prevIndex.value = null;
    currentIndex.value = 0;
  } else {
    container.scrollBy(0, 300);
  }

  // Start the automatic slide transition timer
  startSlideTimeout();
}

function startSlideTimeout() {
  if (slideTimeout) {
    clearTimeout(slideTimeout); // Clear the previous timeout
  }
  slideTimeout = setTimeout(() => {
    nextSlide();
  }, 3000); // Auto slide after 3000 milliseconds (3 seconds)
}
/* 
onMounted(() => {
  slide.value = document.querySelectorAll(".slide");
  if (slide.value) {
    // Start the initial slide timeout
    startSlideTimeout();
    totalImages.value = slide.value.length;
  }
}); */
</script>

<style scoped>
.image-carousel {
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: y mandatory;
}
</style>
