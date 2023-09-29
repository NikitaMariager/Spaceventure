<template>
  <div
    class="carousel-container relative"
    @mouseover="stopAuto"
    @mouseleave="startSlideTimeout"
  >
    <div
      class="h-[50vh] overflow-y-scroll snap-mandatory flex flex-col scroll-smooth image-carousel"
      ref="carouselContainer"
    >
      <div v-for="(slide, index) in slides" :key="index">
        <div class="flex-none snap-start h-[50vh] relative slide">
          <div class="absolute z-40 top-52 left-3 md:left-32">
            <div class="text-white md:my-6 container max-w-6xl mx-auto">
              <span
                class="uppercase"
                :class="
                  index * 600 === prevIndex ? ' animate-sliderHeader1 ' : ''
                "
                >{{ slide.title }}</span
              >

              <h1
                class="text-4xl md:text-5xl font-normal"
                :class="
                  index * 600 === prevIndex ? ' animate-sliderHeader2 ' : ''
                "
              >
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

    <div
      class="absolute right-3 md:right-24 top-1/2 transform -translate-y-1/2"
    >
      <div
        v-for="(slideNav, index) in Array.apply(null, { length: totalImages })"
        class="flex flex-col p-1"
      >
        <div class="relative p-3">
          <div
            class="w-3 h-3 opacity-80 hover:opacity-100 absolute top-0 left-0"
            :class="
              index * 600 === prevIndex && clickIndex === prevIndex
                ? ' bg-Aqua animate-slide'
                : index * 600 === prevIndex
                ? 'bg-Aqua '
                : 'bg-LightGrey'
            "
            @click="slideTo(index * 600)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/* vertical slider whith clickable nav, stops on hover and starts again when mouse leave */
const { data: slides } = await useFetch("http://localhost:4444/banner");

const clickIndex = ref(null); //For nav to set click index for the specific button

const slide = ref([]); //empty array to be filled with imgages from api on mounted

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
  container.scrollTo(0, scrollPos);
}

/* for auto slide */

function nextSlide() {
  const container = carouselContainer.value;

  /* CurrentIndex to keep track of when to reset slider */
  currentIndex.value = currentIndex.value + 1;

  /* previndex sets navigation */
  prevIndex.value = currentIndex.value * 600;

  //restes prev index when it reaches max of images
  if (prevIndex.value === 600 * totalImages) {
    prevIndex.value = 0;
  }

  //resets when current index is the same as amount of images in slider
  if (currentIndex.value === totalImages.value) {
    container.scrollTo(0, 0);
    prevIndex.value = 0;
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

function stopAuto() {
  if (slideTimeout) {
    clearTimeout(slideTimeout); // Clear the previous timeout
  }
}

onMounted(() => {
  slide.value = document.querySelectorAll(".slide");
  if (slide.value) {
    // Start the initial slide timeout
    startSlideTimeout();
    totalImages.value = slide.value.length;
  }
});
</script>

<style scoped>
.image-carousel {
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: y mandatory;
}
</style>
