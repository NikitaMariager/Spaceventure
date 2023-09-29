<template>
  <div>
    <div class="carousel-container relative">
      <div
        class="overflow-x-scroll overscroll-none w-full snap-mandatory flex scroll-smooth image-carousel"
        ref="carouselContainer"
      >
        <div v-for="(slide, index) in gallery" :key="index" class="flex-grow">
          <div
            class="flex-none md:flex snap-start w-screen md:w-full relative slide"
          >
            <!-- slider image -->
            <div class="block h-full w-full md:flex-grow p-3">
              <img
                :src="`http://localhost:4444/images/gallery/${slide.image}`"
                :alt="slide.imagetext"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- slider nav -->
      <div class="flex justify-center md:hidden">
        <div
          v-for="(slideNav, index) in Array.apply(null, {
            length: totalImages,
          })"
        >
          <div
            class="w-3 h-3 opacity-80 hover:opacity-100 m-3"
            :class="
              index * 600 === prevIndex
                ? ' bg-Aqua animate-slide'
                : ' bg-gray-400'
            "
            @click="slideTo(index * 600)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: gallery } = await useFetch("http://localhost:4444/gallery");

const clickIndex = ref(null);

const slide = ref([]);

const carouselContainer = ref(null);

let slideTimeout = null; // Define slideTimeout

let currentIndex = ref(0);
let prevIndex = ref(0);
const totalImages = ref(null);

function lastWord(sentence) {
  let word = sentence.split(" ").splice(-1);
  return word[word.length - 1];
}

function removeLastWord(sentence, word) {
  const firstSentence = sentence.replace(word, "");
  return firstSentence;
}

/* Set slide to cliked navigation */
function slideTo(scrollPos) {
  prevIndex.value = scrollPos;
  clickIndex.value = prevIndex.value;

  const container = carouselContainer.value;
  container.scrollTo(scrollPos, 0);
}

/* for auto slide */

function nextSlide() {
  const container = carouselContainer.value;

  /* current index sammelinges med mængden af billede og starter slider forfra når currentindex er lig mængden af billeder */
  currentIndex.value = currentIndex.value + 1;
  /* previndex bruges til at sætte navigationen */
  prevIndex.value = currentIndex.value * 600;

  if (prevIndex.value === 1800) {
    prevIndex.value = 0;
  }

  if (currentIndex.value === totalImages.value) {
    container.scrollTo(0, 0);
    prevIndex.value = 0;
    currentIndex.value = 0;
  } else {
    container.scrollBy(300, 0);
  }
}

onMounted(() => {
  slide.value = document.querySelectorAll(".slide");
  if (slide.value) {
    totalImages.value = slide.value.length;
  }
});
</script>

<style scoped>
.image-carousel {
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
}
</style>
