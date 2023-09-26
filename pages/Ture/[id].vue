<template>
  <div class="container max-w-6xl mx-auto m-20">
    <div class="flex gap-16">
      <!-- images -->
      <div class="flex flex-col gap-6 w-1/2">
        <div class="w-full h-full">
          <img
            :src="`http://localhost:4444/images/tours/${tour.image1}`"
            :alt="tour.destination"
            class="w-full h-full object-cover"
          />
        </div>

        <div class="w-full h-full">
          <img
            :src="`http://localhost:4444/images/tours/${tour.image2}`"
            :alt="tour.destination"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <div class="w-1/2 relative text-gray-400">
        <div
          class="pricemark bg-Aqua px-3 pt-6 pb-10 uppercase text-white w-fit absolute right-0"
        >
          {{ tour.price }}
        </div>

        <h1
          class="font-semibold border-b-4 pb-3 mb-3 text-black text-xl border-Aqua w-fit"
        >
          {{ tour.destination }}
        </h1>
        <p class="pb-6">{{ tour.title }}</p>

        <div v-html="tour.content" class="content"></div>

        <div
          class="p-6 border-t-2 border-b-2 border-gray-300 mt-6 text-gray-300"
        >
          <p class="pb-2">
            <span class="text-black pr-3"> Destination: </span>
            {{ tour.destination }}
          </p>

          <p class="pb-2">
            <span class="text-black pr-3"> Pris: </span>
            {{ tour.price }}
          </p>

          <p class="pb-2">
            <span class="text-black pr-3"> Afstand fra jorden: </span>
            {{ tour.distance }}
          </p>

          <p class="pb-2">
            <span class="text-black pr-3"> Flyvetid: </span>
            {{ tour.traveltime }}
          </p>
        </div>

        <!-- countdown & raiting -->
        <div class="p-6 border-b-2 border-gray-300">
          <CountDown :launchDate="tour.spacelaunch" />

          <div class="flex gap-1 text-Aqua pt-3 group">
            <div v-for="star in Array.apply(null, { length: tour.rating })">
              <div>
                <font-awesome-icon icon="fa-solid fa-star" />
              </div>
            </div>
            <span class="group-hover:visible invisible text-black"
              >Rated {{ tour.rating }} ud af 5 stjerner</span
            >
          </div>
        </div>

        <!-- Share -->
        <div
          class="text-black py-8 text-2xl font-light flex gap-6 items-center"
        >
          <span class="uppercase">Share</span>
          <font-awesome-icon
            icon="fa-brands fa-facebook-f"
            class="hover:text-Aqua"
          />
          <font-awesome-icon
            icon="fa-brands fa-twitter"
            class="hover:text-Aqua"
          />
          <font-awesome-icon
            icon="fa-brands fa-google-plus-g"
            class="hover:text-Aqua"
          />
          <font-awesome-icon
            icon="fa-brands fa-instagram"
            class="hover:text-Aqua"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const { id } = useRoute().params;
const uri = "http://localhost:4444/tours/" + id;

const { data: tour } = await useFetch(uri);
</script>

<style scoped>
.pricemark {
  clip-path: polygon(0% 0%, 100% 0, 100% 81%, 27% 81%, 0 59%);
}

.content p {
  padding-bottom: 24px;
}
</style>
