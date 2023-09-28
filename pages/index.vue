<template>
  <div>
    <Slider></Slider>

    <Trips />
    <main class="container max-w-6xl mx-auto p-6">
      <!-- Lidt om os -->
      <section class="flex flex-col md:flex-row gap-20 py-20">
        <div class="w-full md:w-1/2">
          <img
            src="../assets/images/om-os.jpg"
            alt="om os- billede af jordkloden genne vinduet på en space-shuttle"
            class="w-full h-full object-cover"
          />
        </div>

        <div class="w-full md:w-1/2 flex flex-col justify-between">
          <div>
            <h3 class="text-3xl font-semibold text-center md:text-left">
              Lidt om os
            </h3>
            <div
              class="mt-6 border-b-2 border-transparent md:border-gray-300 w-full block mb-6"
            >
              <h2
                class="uppercase -mb-[2px] pb-2 pt-2 md:pt-0 text-Aqua border-b-2 border-t-2 md:border-t-0 md:border-b-4 border-Aqua block md:inline-block text-center md:text-left"
              >
                {{ about.title }}
              </h2>
            </div>
            <div v-html="about.content"></div>
          </div>
          <NuxtLink
            to="/kontakt"
            class="bg-Aqua px-12 py-4 w-fit transition-all duration-300 text-white mx-auto md:mx-0 mt-6 md:mt-0 border-2 border-transparent hover:border-black hover:text-black hover:bg-white"
            >Kontakt os</NuxtLink
          >
        </div>
      </section>

      <!-- Team -->
      <Team />
    </main>

    <!-- Nyhedsbrev -->

    <section class="mb-10">
      <div class="news-bg bg-pos h-8"></div>
      <div class="news-bg text-center py-20 text-white">
        <h4 class="text-5xl font-semibold">Tilmeld dig og få 25% rabat</h4>
        <p class="py-6 font-semibold text-sm">
          Tilmeld dig vores nyhedsbrev og få 25% rabat på din første tur!
        </p>
        <form class="flex flex-col md:flex-row gap-3 justify-center mx-3">
          <input
            type="email"
            name="email"
            id="email"
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            placeholder="Din E-mail"
            v-model="formData.email"
            class="bg-[#ffffff73] placeholder:text-white p-4 w-full md:w-80"
          />

          <button
            class="text-white bg-Aqua py-4 px-8 hover:bg-black transition-all duration-150 w-full md:w-fit"
            type="submit"
            @click.prevent="handleSubmit"
          >
            Tilmeld
          </button>
        </form>
        <p class="h-6 pt-2">{{ message }}</p>
      </div>
      <div class="news-bg bg-pos h-8"></div>
    </section>
  </div>
</template>
<script setup>
const { data: about } = await useFetch("http://localhost:4444/about");

const message = ref("");

const formData = ref({
  email: "",
});

const handleSubmit = async () => {
  if (formData.value.email) {
    const { data: responseData, error } = await useFetch(
      "http://localhost:4444/newssubscription",
      {
        method: "post",
        body: {
          email: formData.value.email,
        },
      }
    );
    if (responseData) {
      message.value = "Du er nu tilmeldt";
    }
    if (error) {
      message.value = `Der er sket en fejl, tjek venligst din email `;
    }
  } else {
    message.value = "This text field is rquired";
  }
};
</script>

<style scoped>
.news-bg {
  background-image: url("../assets/images/newsmail-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.bg-pos {
  background-position: bottom;
}
</style>
