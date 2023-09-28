<template>
  <div>
    <div class="container max-w-6xl mx-auto py-12">
      <h1 class="text-3xl mx-6 md:mx-0">Admin</h1>
      <div class="flex flex-col md:flex-row mt-6 gap-12 mx-6 md:mx-0">
        <!-- Admin nav -->
        <div class="w-full md:w-fit">
          <div v-for="link in adminArray">
            <NuxtLink
              :to="link.path"
              class="border-2 border-DarkBlue flex items-center mb-3 p-3 w-full lg:w-72 transition duration-700 ease-in-out group hover:bg-Aqua hover:text-white"
              :class="{
                ' bg-Aqua text-white': link.path === $route.fullPath,
                ' bg-white': !link.path === $route.fullPath,
              }"
            >
              <div class="flex justify-between w-full">
                {{ link.text }}
                <font-awesome-icon icon="fa-solid fa-shuttle-space" /></div
            ></NuxtLink>
          </div>
        </div>

        <!-- sidevidsning -->
        <div class="w-full">
          <NuxtPage />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const adminArray = [
  { path: "/admin/ture", text: "Ture" },
  { path: "/admin/rumfaergen", text: "Rumfærgen" },
  { path: "/admin/kontakt", text: "Kontakt" },
  { path: "/admin/nyhedsbreve", text: "Nyhedsbrev" },
  { path: "/admin/profil", text: "Profil" },
];
</script>
