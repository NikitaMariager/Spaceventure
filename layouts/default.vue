<template>
  <div>
    <header class="flex justify-center w-full">
      <div class="w-full mx-auto">
        <!-- top settings nav -->
        <div
          class="flex gap-6 items-center font-light w-full max-w-6xl mx-auto py-6 pl-3"
        >
          <!-- Mobile menu icon -->
          <button id="mobile-icon" class="md:hidden" @click="menu = !menu">
            <i class="material-icons text-brandDarkBlue" v-if="menu">close</i>
            <i class="material-icons text-brandDarkBlue" v-else>menu</i>
          </button>

          <!-- logo -->
          <NuxtLink to="/">
            <img src="../assets/logo.png" alt="Logo spaceventure"
          /></NuxtLink>
        </div>

        <!-- mobile nav container -->
        <div class="md:hidden flex justify-center mt-3 w-full relative">
          <div
            class="absolute w-full -left-full transition-all duration-500 bg-LightGrey"
            :class="menu === true ? ' left-0 ' : ''"
          >
            <div class="leading-9 px-6">
              <!-- mobiel nav links -->

              <ul class="flex justify-between flex-col max-w-sm mx-auto">
                <li class="flex relative group">
                  <NuxtLink to="/" class="mr-1 p-4">Hjem </NuxtLink>
                </li>

                <li class="flex relative group">
                  <NuxtLink to="/rumfaergen" class="mr-1 p-4"
                    >Rumfærgen
                  </NuxtLink>
                </li>

                <li class="flex relative group">
                  <NuxtLink to="/ture" class="mr-1 p-4">Ture </NuxtLink>
                </li>

                <li class="flex relative group">
                  <NuxtLink to="/galleri" class="mr-1 p-4">Galleri </NuxtLink>
                </li>

                <li class="flex relative group">
                  <NuxtLink to="/sikkerhed" class="mr-1 p-4"
                    >Sikkerhed
                  </NuxtLink>
                </li>

                <li class="flex relative group">
                  <NuxtLink to="/kontakt" class="mr-1 p-4 x">Kontakt </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Main nav -->
        <nav
          class="relative mx-3 sm:mx-auto px-3 md:px-0 bg-DarkBlue text-white flex items-center"
        >
          <!-- desktop nav -->
          <div
            class="container flex justify-between items-center mx-auto max-w-6xl"
          >
            <!-- nav links -->
            <ul class="hidden md:flex space-x-6">
              <li class="flex relative group">
                <NuxtLink
                  to="/"
                  class="mr-1 p-4 border-t-4"
                  :class="
                    $route.path === '/'
                      ? ' bg-DarkBlueGrey  border-t-Aqua'
                      : 'border-t-transparent'
                  "
                  >Hjem
                </NuxtLink>
              </li>

              <li class="flex relative group">
                <NuxtLink
                  to="/rumfaergen"
                  class="mr-1 p-4 border-t-4"
                  :class="
                    $route.path === '/rumfaergen'
                      ? ' bg-DarkBlueGrey  border-t-Aqua'
                      : 'border-t-transparent'
                  "
                  >Rumfærgen
                </NuxtLink>
              </li>

              <li class="flex relative group">
                <NuxtLink
                  to="/ture"
                  class="mr-1 p-4 border-t-4"
                  :class="
                    $route.path === '/ture'
                      ? ' bg-DarkBlueGrey  border-t-Aqua'
                      : 'border-t-transparent'
                  "
                  >Ture
                </NuxtLink>
              </li>

              <li class="flex relative group">
                <NuxtLink
                  to="/galleri"
                  class="mr-1 p-4 border-t-4"
                  :class="
                    $route.path === '/galleri'
                      ? ' bg-DarkBlueGrey  border-t-Aqua'
                      : 'border-t-transparent'
                  "
                  >Galleri
                </NuxtLink>
              </li>

              <li class="flex relative group">
                <NuxtLink
                  to="/sikkerhed"
                  class="mr-1 p-4 border-t-4"
                  :class="
                    $route.path === '/sikkerhed'
                      ? ' bg-DarkBlueGrey  border-t-Aqua'
                      : 'border-t-transparent'
                  "
                  >Sikkerhed
                </NuxtLink>
              </li>

              <li class="flex relative group">
                <NuxtLink
                  to="/kontakt"
                  class="mr-1 p-4 border-t-4"
                  :class="
                    $route.path === '/kontakt'
                      ? ' bg-DarkBlueGrey  border-t-Aqua'
                      : 'border-t-transparent'
                  "
                  >Kontakt
                </NuxtLink>
              </li>
            </ul>

            <!-- Some icons -->
            <div class="flex gap-3">
              <NuxtLink to="" class="hover:text-Aqua">
                <font-awesome-icon icon="fa-brands fa-facebook-f" />
              </NuxtLink>
              <NuxtLink to="" class="hover:text-Aqua">
                <font-awesome-icon icon="fa-brands fa-twitter" />
              </NuxtLink>
              <NuxtLink to="" class="hover:text-Aqua">
                <font-awesome-icon icon="fa-brands fa-google-plus-g" />
              </NuxtLink>
              <NuxtLink to="" class="hover:text-Aqua">
                <font-awesome-icon icon="fa-brands fa-instagram" />
              </NuxtLink>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <!-- output page content -->

    <slot />

    <ToTop />

    <footer class="bg-DarkBlue">
      <div
        class="container max-w-6xl mx-auto text-white py-20 flex justify-between"
      >
        <!-- kontakt -->
        <div>
          <h6 class="uppercase pb-4">Kontakt</h6>
          <ul class="flex flex-col gap-3">
            <li class="flex items-center gap-6">
              <font-awesome-icon icon="fa-solid fa-phone" class="text-Aqua" />
              <a href="tel:+4586351003">+45 86 35 10 03</a>
            </li>

            <li class="flex items-center gap-6">
              <font-awesome-icon
                icon="fa-solid fa-envelope"
                class="text-Aqua"
              />
              <a href="mailto:info@spaceventure.dk">info@spaceventure.dk</a>
            </li>

            <li class="flex items-center gap-6">
              <font-awesome-icon
                icon="fa-solid fa-location-arrow"
                class="text-Aqua"
              />
              <address>Galaksevej 39, 8000 Århus</address>
            </li>
          </ul>
        </div>

        <!-- Hurtig links -->
        <div>
          <h6 class="uppercase pb-4">Hurtig links</h6>
          <ul class="columns-2 gap-20 pl-4 pb-4">
            <li class="list-disc text-Aqua pb-3">
              <NuxtLink to="/rumfaergen" class="text-white hover:text-Aqua"
                >Rumfærgen
              </NuxtLink>
            </li>

            <li class="list-disc text-Aqua pb-3">
              <NuxtLink to="/ture" class="text-white hover:text-Aqua"
                >Ture
              </NuxtLink>
            </li>

            <li class="list-disc text-Aqua pb-3">
              <NuxtLink to="/galleri" class="text-white hover:text-Aqua"
                >Galleri
              </NuxtLink>
            </li>

            <li class="list-disc text-Aqua pb-3">
              <NuxtLink to="/sikkerhed" class="text-white hover:text-Aqua"
                >Sikkerhed
              </NuxtLink>
            </li>

            <li class="list-disc text-Aqua pb-3">
              <NuxtLink to="/kontakt" class="text-white hover:text-Aqua"
                >Kontakt
              </NuxtLink>
            </li>
          </ul>

          <NuxtLink to="/kontakt" class="bg-Aqua px-6 py-4 hover:text-Aqua"
            >Kontakt</NuxtLink
          >
        </div>
      </div>
      <!-- sub footer -->
      <div class="bg-DarkerDarkBlue">
        <div
          class="container max-w-6xl mx-auto p-6 text-BlueGrey flex justify-between"
        >
          <p>&copy; 2021 Space Venture. All rights reserved.</p>
          <!-- Some icons -->
          <div class="flex gap-3">
            <NuxtLink to="https://www.com/" class="hover:text-Aqua">
              <font-awesome-icon icon="fa-brands fa-facebook-f" />
            </NuxtLink>
            <NuxtLink to="" class="hover:text-Aqua">
              <font-awesome-icon icon="fa-brands fa-twitter" />
            </NuxtLink>
            <NuxtLink to="" class="hover:text-Aqua">
              <font-awesome-icon icon="fa-brands fa-google-plus-g" />
            </NuxtLink>
            <NuxtLink to="" class="hover:text-Aqua">
              <font-awesome-icon icon="fa-brands fa-instagram" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const menu = ref(false);
</script>
