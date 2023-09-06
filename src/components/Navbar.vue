<script >
import { mapActions, mapGetters } from "vuex";
import CartBadgeComponent from "./CartBadgeComponent.vue";

export default {
  computed: {
    ...mapGetters("auth", ["isAuthenticated"]),
  },
  methods: {
    ...mapActions("auth", ["logout"]),
  },
  components: { CartBadgeComponent },
};
</script>


<template>

<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center">
        <img src="" class="h-8 mr-3" alt="" style="text-decoration-color: blue;" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Style.mu</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>

    <div
          class="flex md:order-2 flex cursor-pointer items-center justify-center rounded-xl"
        >
          <div v-if="isAuthenticated"></div>
          <div
            class="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0"
          >
            <div v-if="isAuthenticated" class="flex md:order-2">
              <button
                @click="logout"
                type="button"
                class="block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
              >
                Sign Out
              </button>
            </div>

            <div v-else class="flex md:order-2">
              <router-link
                to="/login"
                type="button"
                class="block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
              >
                Sign In
              </router-link>

              <router-link
                to="/register"
                type="button"
                class="block text-md px-4 ml-2 py-2 rounded text-blue-700 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
              >
                Sign Up
              </router-link>
            </div>
          </div>
        </div>
        <div
          class="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8"
        >
          <div class="text-md font-bold text-black-700 lg:flex-grow">
            <center>
              <router-link
                to="/"
                class="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
              >
                HOME
              </router-link>
              <router-link
                to="/brand"
                class="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
              >
                BRAND
              </router-link>

              <router-link
                to="/kategori"
                class="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
              >
                CATEGORY
              </router-link>
              <router-link
                to="/product"
                class="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
              >
                PRODUCT
              </router-link>
              <router-link
                to="/contact"
                class="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
              >
                CONTACT
              </router-link>
            </center>
          </div>
          <CartBadgeComponent></CartBadgeComponent>
          <!-- logo profil -->
          <a href="/profile">
            <svg
              class="h-8 w-8 text-black"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="8.5" cy="7" r="4" />
              <polyline points="17 11 19 13 23 9" />
            </svg>
          </a>
          <!-- logo profil -->
        </div>
      </div>
    </nav>
 
</template>

