<template>
  <div class="">
    <header class="flex justify-center w-full border-b border-gray-100">
      <div class="w-full mx-auto">
        <!-- top settings nav -->
        <div
          class="bg-blue-50 flex gap-6 justify-end items-center px-6 py-1 font-light w-full"
        >
          <NuxtLink class="hover:underline cursor-pointer">hjem</NuxtLink>
        </div>

        <!-- Main nav -->
        <nav
          class="relative pt-5 container max-w-6xl mx-3 sm:mx-auto px-3 md:px-0"
        >
          <div class="container flex justify-between items-center mx-auto pb-2">
            <!-- logo -->
            <NuxtLink to="/">
              logo
              <img src="" alt=""
            /></NuxtLink>

            <!-- nav links -->
            <ul class="hidden md:flex space-x-6 font-light">
              <li class="flex relative group">
                <NuxtLink to="/" class="mr-1">hjem </NuxtLink>
              </li>
            </ul>

            <div class="flex gap-6 md:pl-10 font-light">
              <!-- Mobile menu icon -->
              <button id="mobile-icon" class="md:hidden" @click="menu = !menu">
                <i class="material-icons text-brandDarkBlue" v-if="menu"
                  >close</i
                >
                <i class="material-icons text-brandDarkBlue" v-else>menu</i>
              </button>
            </div>
          </div>

          <!-- Mobile menu -->
          <div class="md:hidden flex justify-center mt-3 w-full">
            <div id="mobile-menu" class="mobile-menu w-full" v-show="menu">
              <!-- add hidden here later -->
              <div class="leading-9 bg-white px-6">
                <!-- mobiel nav links -->
                <div class="flex justify-between max-w-sm mx-auto">
                  <NuxtLink to="/" class="mr-1" @click="menu = !menu"
                    >hjem</NuxtLink
                  >
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <!-- output page content -->
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup>
const menu = ref(false);
</script>
