<template>
  <div>
    <Slider></Slider>

    <Trips />
    <main class="container max-w-6xl mx-auto p-6">
      <!-- Lidt om os -->
      <section class="flex gap-20 py-20">
        <div class="w-1/2">
          <img
            src="../assets/images/om-os.jpg"
            alt="om os- billede af jordkloden genne vinduet på en space-shuttle"
            class="w-full h-full object-cover"
          />
        </div>

        <div class="w-1/2 flex flex-col justify-between">
          <div>
            <h3 class="text-3xl font-semibold">Lidt om os</h3>
            <div class="mt-6 border-b-2 border-r-gray-400 w-full block mb-6">
              <h2
                class="uppercase -mb-[2px] pb-2 text-Aqua border-b-4 border-b-Aqua inline-block"
              >
                {{ about.title }}
              </h2>
            </div>
            <div v-html="about.content"></div>
          </div>
          <NuxtLink
            to="/kontakt"
            class="bg-Aqua px-12 py-4 text-white hover:text-Aqua w-fit"
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
        <form action="">
          <input
            type="email"
            name="email"
            id="email"
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            required
            placeholder="Din E-mail"
            v-model="formData.email"
            class="bg-[#ffffff73] placeholder:text-white p-4 w-80"
          />

          <input
            class="text-white bg-Aqua py-4 px-8 ml-2"
            type="submit"
            @click="handleSubmit"
          />
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
