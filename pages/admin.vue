<template>
  <div>
    <div class="bg-gainsboro pt-36 md:pt-20 pb-12 px-6">
      <div
        class="container w-full md:max-w-6xl px-6 md:px-0 mx-auto flex justify-between items-center"
      >
        <h1 class="text-3xl">Admin</h1>
        <Breadcrumbs />
      </div>
    </div>

    <div class="container max-w-6xl mx-auto">
      <div class="flex mt-6 gap-6">
        <!-- Admin nav -->
        <div class="w-1/2 mt-6">
          <div v-for="link in adminArray">
            <NuxtLink
              :to="link.path"
              class="border-2 border-DarkBlue flex items-center mb-3 p-3 w-full lg:w-72 transition duration-700 ease-in-out group hover:bg-Aqua hover:text-white"
              :class="{
                ' bg-safetyOrangeBlazeOrange text-white':
                  link.path === $route.fullPath,
                ' bg-white': !link.path === $route.fullPath,
              }"
            >
              <div class="flex justify-between w-full">
                {{ link.text }}
                <font-awesome-icon icon="fa-solid fa-shuttle-space" /></div
            ></NuxtLink>
          </div>
        </div>

        <div class="w-full">
          <NuxtPage />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const adminArray = [
  { path: "/admin/om-os", text: "om os" },
  { path: "/admin/nyheder", text: "Nyheder" },
  { path: "/admin/booking", text: "Booking" },
];
</script>
