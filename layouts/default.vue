<template>
  <div>
    <header class="flex justify-center w-full">
      <div class="w-full mx-auto">
        <!-- top settings nav -->
        <div
          class="flex gap-6 items-center font-light w-full max-w-6xl mx-auto py-6 pl-3 border-b border-gray-200"
        >
          <!-- Mobile menu icon -->
          <button id="mobile-icon" class="lg:hidden" @click="menu = !menu">
            <font-awesome-icon icon="fa-solid fa-arrow-left" v-if="menu" />

            <font-awesome-icon icon="fa-solid fa-bars" v-else />
          </button>

          <!-- logo -->
          <NuxtLink to="/" @click="menu = false">
            <img src="../assets/logo.png" alt="Logo spaceventure"
          /></NuxtLink>
        </div>

        <!-- mobile nav container -->
        <div class="flex justify-center w-2/3 relative h-full lg:hidden">
          <div
            class="w-full transition-all duration-500 bg-white absolute top-0 z-50 h-screen"
            :class="menu === true ? 'left-0' : '-left-full'"
          >
            <!-- Mobile Some icons -->
            <div
              class="flex gap-6 mr-3 py-6 w-full justify-center border-b-2 border-gray-200"
            >
              <NuxtLink
                to="https://facebook.com/"
                class="hover:text-Aqua"
                aria-label="
              go to spaceenture's facebook"
              >
                <font-awesome-icon icon="fa-brands fa-facebook-f" />
              </NuxtLink>
              <NuxtLink
                to="https://twitter.com/"
                class="hover:text-Aqua"
                aria-label="
              go to spaceenture's twitter"
              >
                <font-awesome-icon icon="fa-brands fa-twitter" />
              </NuxtLink>
              <NuxtLink
                to="https://google.com/"
                class="hover:text-Aqua"
                aria-label="
              go to spaceenture's google+"
              >
                <font-awesome-icon icon="fa-brands fa-google-plus-g" />
              </NuxtLink>
              <NuxtLink
                to="https://instagram.com/"
                class="hover:text-Aqua"
                aria-label="
              go to spaceenture's instagram"
              >
                <font-awesome-icon icon="fa-brands fa-instagram" />
              </NuxtLink>

              <NuxtLink
                @click="menu = !menu"
                to="/login"
                aria-label="gå til login"
                class="hover:text-Aqua border-l-2 border-gray-500 pl-3"
                ><font-awesome-icon icon="fa-solid fa-user-astronaut" />
                Login</NuxtLink
              >
            </div>
            <!-- Mobile links -->
            <ul class="flex justify-between flex-col max-w-sm mx-auto">
              <li class="flex relative group">
                <NuxtLink to="/" class="mr-1 p-4" @click="menu = !menu"
                  >Hjem
                </NuxtLink>
              </li>

              <li class="flex relative group">
                <NuxtLink
                  to="/rumfaergen"
                  class="mr-1 p-4"
                  @click="menu = !menu"
                  >Rumfærgen
                </NuxtLink>
              </li>

              <!-- Mobile Dropdown -->
              <li class="relative group">
                <div
                  class="flex justify-between"
                  @click="mobileDropdown = !mobileDropdown"
                >
                  <NuxtLink to="/ture" class="mr-1 p-4" @click="menu = !menu"
                    >Ture
                  </NuxtLink>
                  <span v-if="mobileDropdown"
                    ><font-awesome-icon icon="fa-solid fa-chevron-up"
                  /></span>

                  <span v-else
                    ><font-awesome-icon icon="fa-solid fa-chevron-down"
                  /></span>
                </div>

                <div
                  class="pl-6 bg-LightGrey transform transition-all duration-200 ease-in-out"
                  v-if="mobileDropdown"
                >
                  <li
                    class="text-sm p-2 rounded-lg leading-8"
                    v-for="trip in trips"
                  >
                    <NuxtLink
                      :to="`/ture/${trip._id}`"
                      class="border-l-4 border-transparent hover:border-Aqua hover:pl-3 transition-all duration-200"
                      @click="closeNav"
                    >
                      {{ trip.destination }}
                    </NuxtLink>
                  </li>
                </div>
              </li>

              <li class="flex relative group">
                <NuxtLink to="/galleri" class="mr-1 p-4" @click="menu = !menu"
                  >Galleri
                </NuxtLink>
              </li>

              <li class="flex relative group">
                <NuxtLink to="/sikkerhed" class="mr-1 p-4" @click="menu = !menu"
                  >Sikkerhed
                </NuxtLink>
              </li>

              <li class="flex relative group">
                <NuxtLink to="/kontakt" class="mr-1 p-4 x" @click="menu = !menu"
                  >Kontakt
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <!-- Main nav -->
        <nav
          class="hidden lg:flex mx-3 sm:mx-auto px-3 lg:px-0 bg-DarkBlue text-white items-center"
        >
          <!-- desktop nav -->
          <div
            class="container flex justify-between items-center mx-auto max-w-6xl"
          >
            <!-- nav links -->
            <ul class="hidden md:flex space-x-6">
              <li class="relative group">
                <div
                  class="flex group-hover:bg-DarkBlueGrey w-full border-t-4"
                  :class="
                    $route.path === '/'
                      ? ' bg-DarkBlueGrey  border-t-Aqua'
                      : 'border-t-transparent'
                  "
                >
                  <div
                    class="bg-Aqua w-full absolute top-0 h-1 group-hover:opacity-100 left-0 group-hover:animate-navSlide transition-all ease-in-out duration-700 opacity-0"
                  ></div>

                  <NuxtLink to="/" class="mr-1 p-4">Hjem </NuxtLink>
                </div>
              </li>

              <li class="relative group">
                <div
                  class="flex group-hover:bg-DarkBlueGrey w-full border-t-4"
                  :class="
                    $route.path === '/rumfaergen'
                      ? ' bg-DarkBlueGrey  border-t-Aqua'
                      : 'border-t-transparent'
                  "
                >
                  <div
                    class="bg-Aqua w-full absolute top-0 h-1 group-hover:opacity-100 left-0 group-hover:animate-navSlide transition-all ease-in-out duration-700 opacity-0"
                  ></div>

                  <NuxtLink to="/rumfaergen" class="mr-1 p-4"
                    >Rumfærgen
                  </NuxtLink>
                </div>
              </li>

              <!-- Dropdown -->
              <li class="relative group">
                <div
                  class="flex group-hover:bg-DarkBlueGrey w-full border-t-4"
                  :class="
                    $route.path.includes('/ture')
                      ? ' bg-DarkBlueGrey  border-t-Aqua'
                      : 'border-t-transparent'
                  "
                >
                  <div
                    class="bg-Aqua w-full absolute top-0 h-1 group-hover:opacity-100 left-0 group-hover:animate-navSlide transition-all ease-in-out duration-700 opacity-0"
                  ></div>

                  <NuxtLink to="/ture" class="mr-1 p-4">Ture </NuxtLink>

                  <!--  Submenu starts -->
                  <div
                    class="absolute py-6 top-12 opacity-0 origin-top rounded-xl z-50 group-hover:opacity-100 w-72 group-hover:top-9 transition-all ease-in-out duration-700"
                  >
                    <ul class="bg-white p-6 origin-top text-black">
                      <li
                        class="text-sm p-2 rounded-lg leading-8"
                        v-for="trip in trips"
                      >
                        <NuxtLink
                          :to="`/ture/${trip._id}`"
                          class="border-l-4 border-transparent hover:border-Aqua hover:pl-3 transition-all duration-200"
                        >
                          {{ trip.destination }}
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>
                  <!-- Submenu ends -->
                </div>
              </li>

              <li class="relative group">
                <div
                  class="flex group-hover:bg-DarkBlueGrey w-full border-t-4"
                  :class="
                    $route.path === '/galleri'
                      ? ' bg-DarkBlueGrey  border-t-Aqua'
                      : 'border-t-transparent'
                  "
                >
                  <div
                    class="bg-Aqua w-full absolute top-0 h-1 group-hover:opacity-100 left-0 group-hover:animate-navSlide transition-all ease-in-out duration-700 opacity-0"
                  ></div>

                  <NuxtLink to="/galleri" class="mr-1 p-4">Galleri </NuxtLink>
                </div>
              </li>

              <li class="relative group">
                <div
                  class="flex group-hover:bg-DarkBlueGrey w-full border-t-4"
                  :class="
                    $route.path === '/sikkerhed'
                      ? ' bg-DarkBlueGrey  border-t-Aqua'
                      : 'border-t-transparent'
                  "
                >
                  <div
                    class="bg-Aqua w-full absolute top-0 h-1 group-hover:opacity-100 left-0 group-hover:animate-navSlide transition-all ease-in-out duration-700 opacity-0"
                  ></div>

                  <NuxtLink to="/sikkerhed" class="mr-1 p-4"
                    >sikkerhed
                  </NuxtLink>
                </div>
              </li>

              <li class="relative group">
                <div
                  class="flex group-hover:bg-DarkBlueGrey w-full border-t-4"
                  :class="
                    $route.path === '/kontakt'
                      ? ' bg-DarkBlueGrey  border-t-Aqua'
                      : 'border-t-transparent'
                  "
                >
                  <div
                    class="bg-Aqua w-full absolute top-0 h-1 group-hover:opacity-100 left-0 group-hover:animate-navSlide transition-all ease-in-out duration-700 opacity-0"
                  ></div>

                  <NuxtLink to="/kontakt" class="mr-1 p-4">kontakt </NuxtLink>
                </div>
              </li>
            </ul>

            <!-- Some icons -->
            <div class="flex gap-3 mr-3">
              <NuxtLink
                to="https://facebook.com/"
                class="hover:text-Aqua"
                aria-label="
              go to spaceenture's facebook"
              >
                <font-awesome-icon icon="fa-brands fa-facebook-f" />
              </NuxtLink>
              <NuxtLink
                to="https://twitter.com/"
                class="hover:text-Aqua"
                aria-label="
              go to spaceenture's twitter"
              >
                <font-awesome-icon icon="fa-brands fa-twitter" />
              </NuxtLink>
              <NuxtLink
                to="https://google.com/"
                class="hover:text-Aqua"
                aria-label="
              go to spaceenture's google+"
              >
                <font-awesome-icon icon="fa-brands fa-google-plus-g" />
              </NuxtLink>
              <NuxtLink
                to="https://instagram.com/"
                class="hover:text-Aqua"
                aria-label="
              go to spaceenture's instagram"
              >
                <font-awesome-icon icon="fa-brands fa-instagram" />
              </NuxtLink>

              <NuxtLink
                to="/login"
                aria-label="gå til login"
                class="hover:text-Aqua text-white border-l-2 border-Aqua pl-3"
                ><font-awesome-icon icon="fa-solid fa-user-astronaut" />
                Login</NuxtLink
              >
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
        class="container max-w-6xl mx-auto text-white py-20 flex flex-col md:flex-row justify-center md:justify-between"
      >
        <!-- kontakt -->
        <div
          class="text-center md:text-left w-full flex flex-col justify-center md:justify-start"
        >
          <h6 class="uppercase pb-4">Kontakt</h6>
          <ul class="flex flex-col gap-3 mx-auto md:mx-0">
            <li class="flex items-center gap-6">
              <font-awesome-icon icon="fa-solid fa-phone" class="text-Aqua" />
              <a href="tel:+4586351003" class="hover:text-Aqua"
                >+45 86 35 10 03</a
              >
            </li>

            <li class="flex items-center gap-6">
              <font-awesome-icon
                icon="fa-solid fa-envelope"
                class="text-Aqua"
              />
              <a href="mailto:info@spaceventure.dk" class="hover:text-Aqua"
                >info@spaceventure.dk</a
              >
            </li>

            <li class="flex items-center gap-6">
              <font-awesome-icon
                icon="fa-solid fa-location-arrow"
                class="text-Aqua"
              />
              <address class="hover:text-Aqua">
                Galaksevej 39, 8000 Århus
              </address>
            </li>
          </ul>
        </div>

        <!-- Hurtig links -->
        <div class="max-w-sm mx-auto mt-12 md:mt-0">
          <h6 class="uppercase pb-4 text-center md:text-left">Hurtig links</h6>
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

          <NuxtLink
            to="/kontakt"
            class="bg-Aqua px-6 py-4 hover:bg-white hover:text-black border-2 border-transparent hover:border-black mx-auto"
            >Kontakt</NuxtLink
          >
        </div>
      </div>
      <!-- sub footer -->
      <div class="bg-DarkerDarkBlue">
        <div
          class="container max-w-6xl mx-auto p-6 text-BlueGrey flex flex-col md:flex-row justify-between"
        >
          <p>&copy; 2021 Space Venture. All rights reserved.</p>
          <!-- Some icons -->
          <div class="flex gap-3">
            <NuxtLink
              to="https://facebook.com/"
              class="hover:text-Aqua"
              aria-label="
            go to spaceenture's facebook"
            >
              <font-awesome-icon icon="fa-brands fa-facebook-f" />
            </NuxtLink>
            <NuxtLink
              to="https://twitter.com/"
              class="hover:text-Aqua"
              aria-label="
            go to spaceenture's twitter"
            >
              <font-awesome-icon icon="fa-brands fa-twitter" />
            </NuxtLink>
            <NuxtLink
              to="https://google.com/"
              class="hover:text-Aqua"
              aria-label="
            go to spaceenture's google+"
            >
              <font-awesome-icon icon="fa-brands fa-google-plus-g" />
            </NuxtLink>
            <NuxtLink
              to="https://instagram.com/"
              class="hover:text-Aqua"
              aria-label="
            go to spaceenture's instagram"
            >
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
const mobileDropdown = ref(false);

function closeNav() {
  menu.value = false;
  mobileDropdown.value = false;
}

const { data: trips } = await useFetch("http://localhost:4444/tours");
</script>
