<template>
  <section class="py-5 sm:py-10" style="margin-top: 70px;">
    <div class="container mx-auto px-4">
      <div v-if="product">
        <nav class="flex">
          <ol role="list" class="flex items-center">
            <li class="text-left">
              <div class="-m-1">
                <a
                  href="/"
                  class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                >
                  Home
                </a>
              </div>
            </li>

            <li class="text-left">
              <div class="flex items-center">
                <span class="mx-2 text-gray-400">/</span>
                <div class="-m-1">
                  <a
                    href="/product"
                    class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                  >
                    Product
                  </a>
                </div>
              </div>
            </li>

            <li class="text-left">
              <div class="flex items-center">
                <span class="mx-2 text-gray-400">/</span>
                <div class="-m-1">
                  <a
                    href="#"
                    class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                    aria-current="page"
                  >
                    {{ product.name }}
                  </a>
                </div>
              </div>
            </li>
          </ol>
        </nav>

        <div
          class="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16"
        >
          <div class="lg:col-span-3 lg:row-end-1">
            <div class="lg:flex lg:items-start">
              <div class="lg:order-2 lg:ml-5">
                <div class="max-w-xl overflow-hidden rounded-lg">
                  <img
                    class="h-full w-full max-w-full object-cover"
                    src="../assets/img/product.jpg"
                    style="width: 450px"
                    alt=""
                  />
                </div>
              </div>

              <div class="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                <div class="flex flex-row items-start lg:flex-col">
                  <button
                    type="button"
                    class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center"
                  >
                    <img
                      class="h-full w-full object-cover"
                      src="../assets/img/product.jpg"
                      alt=""
                    />
                  </button>
                  <button
                    type="button"
                    class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
                  >
                    <img
                      class="h-full w-full object-cover"
                      src="../assets/img/product.jpg"
                      alt=""
                    />
                  </button>
                  <button
                    type="button"
                    class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
                  >
                    <img
                      class="h-full w-full object-cover"
                      src="../assets/img/product.jpg"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-2 lg:row-span-2 lg:row-end-2">
            <h1 class="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
              {{ capitalizeFirstLetter(product.name) }}
            </h1>

            <div class="mt-5 flex items-center">
              <div class="flex items-center">
                <svg
                  class="block h-4 w-4 align-middle text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    class=""
                  ></path>
                </svg>
                <svg
                  class="block h-4 w-4 align-middle text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    class=""
                  ></path>
                </svg>
                <svg
                  class="block h-4 w-4 align-middle text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    class=""
                  ></path>
                </svg>
                <svg
                  class="block h-4 w-4 align-middle text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    class=""
                  ></path>
                </svg>
                <svg
                  class="block h-4 w-4 align-middle text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    class=""
                  ></path>
                </svg>
              </div>
              <p class="ml-2 text-sm font-medium text-gray-500">
                {{ product.rating.rate }}
              </p>
            </div>

            <h2 class="mt-8 text-base text-gray-900">
              Category || {{ product.slug }}
            </h2>
            <h2 class="mt-8 text-base text-gray-900"></h2>
            <h2 class="mt-8 text-base text-gray-900">
              Stock : {{ product.stock }}
            </h2>
            <br />
            <div class="flex">
              <button
                @click="addwishlist(product.variations[0].product_id)"
                class="rounded-full w-10 h-10 bg-blue-200 p-0 border-0 inline-flex items-center justify-center text-blue-700 ml-4"
              >
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-9 h-7"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </button>
              <button class="ml-4" @click="deleteWishlist(product.id)"></button>
            </div>

            <!-- <div v-if="token">
                <a href="#">
                  <button
                    @click="addWishlist(product.id)"
                    type="button"
                    class="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-blue-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-yellow-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="shrink-0 mr-3 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                    Add to Wishlist
                  </button>
                </a>
              </div> -->
            <div
              class="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0"
            >
            
              <div class="flex items-end">
                <h1 class="text-3xl font-bold">
                  {{ formatRupiah(product.base_price) }}
                </h1>
                <!-- <span class="text-base">/month</span> -->
              </div>

              <div v-if="token">
                <a href="#">
                  <button
                    @click="addKeranjang(product.id)"
                    type="button"
                    class="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-blue-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-yellow-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="shrink-0 mr-3 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                    Add to cart
                  </button>
                </a>
              </div>

              <div v-else>
                <router-link to="/login">
                  <button
                    type="button"
                    class="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="shrink-0 mr-3 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                    Buy Now
                  </button>
                </router-link>
              </div>
            </div>
          </div>

          <ul class="mt-8 space-y-2">
            <li
              class="flex items-center text-left text-sm font-medium text-gray-600"
            >
              <svg
                class="mr-2 block h-5 w-5 align-middle text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  class=""
                ></path>
              </svg>
              Free shipping worldwide
            </li>

            <li
              class="flex items-center text-left text-sm font-medium text-gray-600"
            >
              <svg
                class="mr-2 block h-5 w-5 align-middle text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  class=""
                ></path>
              </svg>
              Cancel Anytime
            </li>
          </ul>
        </div>

        <div class="lg:col-span-3">
          <div class="border-b border-gray-300">
            <nav class="flex gap-4">
              <a
                href="#"
                title=""
                class="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"
              >
                Description
              </a>
            </nav>
          </div>

          <div
            class="mx-auto max-w-6xl mt-10 justify-center px-6 md:flex md:space-x-6 xl:px-0"
          >
            <div class="rounded-lg md:w-1/3">
              <div class="flex w-full flex-col">
                <div class="ml-32">
                  <div class="my-4 rounded-xl sm:my-0 sm:ml-auto">
                    <div class="flex h-16 items-center text-4xl font-bold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-14 w-14 text-yellow-300"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                      4.9
                    </div>
                  </div>
                </div>
                <p class="text-sm ml-28 mb-3 text-gray-500">
                  96% of buyers are satisfied
                </p>
                <div class="text-gray-700">
                  <p class="font-medium">1,929 ratings • 729 reviews</p>
                  <ul class="mb-6 mt-2 space-y-2">
                    <li class="flex items-center text-sm font-medium">
                      <span class="w-3">5</span
                      ><span class="mr-4 text-yellow-300"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          /></svg
                      ></span>
                      <div
                        class="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300"
                      >
                        <div class="h-full w-10/12 bg-yellow-300"></div>
                      </div>
                      <span class="w-3">1.870</span>
                    </li>
                    <li class="flex items-center text-sm font-medium">
                      <span class="w-3">4</span
                      ><span class="mr-4 text-yellow-300"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          /></svg
                      ></span>
                      <div
                        class="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300"
                      >
                        <div class="h-full w-8/12 bg-yellow-300"></div>
                      </div>
                      <span class="w-3">140</span>
                    </li>
                    <li class="flex items-center text-sm font-medium">
                      <span class="w-3">3</span
                      ><span class="mr-4 text-yellow-300"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          /></svg
                      ></span>
                      <div
                        class="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300"
                      >
                        <div class="h-full w-1/12 bg-yellow-300"></div>
                      </div>
                      <span class="w-3">30</span>
                    </li>
                    <li class="flex items-center text-sm font-medium">
                      <span class="w-3">2</span
                      ><span class="mr-4 text-yellow-300"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          /></svg
                      ></span>
                      <div
                        class="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300"
                      >
                        <div class="h-full w-0 bg-yellow-300"></div>
                      </div>
                      <span class="w-3">12</span>
                    </li>
                    <li class="flex items-center text-sm font-medium">
                      <span class="w-3">1</span
                      ><span class="mr-4 text-yellow-300"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          /></svg
                      ></span>
                      <div
                        class="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300"
                      >
                        <div class="h-full w-1/12 bg-yellow-300"></div>
                      </div>
                      <span class="w-3">20</span>
                    </li>
                  </ul>
                </div>
                <!-- <button class="w-36 rounded-full bg-blue-900 py-3 text-white font-medium">Write a review</button> -->
              </div>
            </div>
            <div class="mt-6 h-full ml-4 md:mt-0 md:w-2/3">
              <ul class="mt-6 ml-6">
        <div class="flex items-start">
            <img class="block h-10 w-10 max-w-full flex-shrink-0 rounded-full align-middle"
                src="https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=2000" alt="" />

            <div class="ml-6">
                <p class="text-sm mb-3 font-bold text-gray-900">Tom Holland</p>
                <p class="mt-2 mb-3 text-base text-gray-900">I am very happy with my purchase from this e-commerce! The
                    fruit products I bought were simply amazing. The fruits I received were very fresh and of high quality.
                    The taste and aroma of the fruit is so authentic, it makes me feel like I'm picking it straight from my
                    own garden.</p>
                <div class="flex items-center">
                    <svg class="block h-6 w-6 align-middle text-yellow-300" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            class=""></path>
                    </svg>
                    <svg class="block h-6 w-6 align-middle text-yellow-300" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20A" fill="currentColor">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            class=""></path>
                    </svg>
                    <svg class="block h-6 w-6 align-middle text-yellow-300" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            class=""></path>
                    </svg>
                    <svg class="block h-6 w-6 align-middle text-yellow-300" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            class=""></path>
                    </svg>
                    <svg class="block h-6 w-6 align-middle text-yellow-300" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            class=""></path>
                    </svg>
                    <p class="mt-1 ml-2 font-semibold text-sm text-gray-600">June 03, 2023</p>
                </div>



            </div>
        </div>

    </ul>
    <ul class="mt-6 ml-6">
        <div class="flex items-start">
            <img class="block h-10 w-10 max-w-full flex-shrink-0 rounded-full align-middle"
                src="https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=2000" alt="" />

            <div class="ml-6">
                <p class="text-sm mb-3 font-bold text-gray-900">Light Yagami</p>
                <p class="mt-2 mb-3 text-base text-gray-900">Overall, the experience of shopping for fruit on this
                    e-commerce is really impressive. I will definitely be back to buy other fruit products in the future.
                    Thank you for a great shopping experience!</p>
                <div class="flex items-center">
                    <svg class="block h-6 w-6 align-middle text-yellow-300" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            class=""></path>
                    </svg>
                    <svg class="block h-6 w-6 align-middle text-yellow-300" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            class=""></path>
                    </svg>
                    <svg class="block h-6 w-6 align-middle text-yellow-300" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            class=""></path>
                    </svg>
                    <svg class="block h-6 w-6 align-middle text-yellow-300" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            class=""></path>
                    </svg>
                    <svg class="block h-6 w-6 align-middle text-gray-400" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            class=""></path>
                    </svg>
                    <p class="mt-1 ml-2 font-semibold text-sm text-gray-600">June 12, 2023</p>
                </div>



            </div>
        </div>

    </ul>
    <ul class="mt-6 ml-6">
        <div class="flex items-start">
            <img class="block h-10 w-10 max-w-full flex-shrink-0 rounded-full align-middle"
                src="https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=2000" alt="" />

            <div class="ml-6">
                <p class="text-sm mb-3 font-bold text-gray-900">Conan Doyle</p>
                <p class="mt-2 mb-3 text-base text-gray-900">The price of this product is also very comparable to its
                    quality. I feel satisfied with the value I get from each fruit I buy. In addition, the customer service
                    from this e-commerce is also very responsive and helpful.</p>
                <div class="flex items-center">
                    <svg class="block h-6 w-6 align-middle text-yellow-300" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            class=""></path>
                    </svg>
                    <svg class="block h-6 w-6 align-middle text-yellow-300" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            class=""></path>
                    </svg>
                    <svg class="block h-6 w-6 align-middle text-yellow-300" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            class=""></path>
                    </svg>
                    <svg class="block h-6 w-6 align-middle text-yellow-300" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            class=""></path>
                    </svg>
                    <svg class="block h-6 w-6 align-middle text-gray-400" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            class=""></path>
                    </svg>
                    <p class="mt-1 ml-2 font-semibold text-sm text-gray-600">June 19, 2023</p>
                </div>



            </div>
        </div>

    </ul>


            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div v-else>
                Product not found.
            </div>
        </div> -->
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Swal from "sweetalert2";

export default {
  
  data() {
    return {
      token: null,
    };
  },
  computed: {
    ...mapGetters("product", ["getProductById"]),
    ...mapGetters("wishlist", ["getWish"]),
    ...mapGetters("product", ["addWishlist"]),
    product() {
      return this.getProductById(Number(this.$route.params.id));
    },
    wishlist() {
      return this.$store.getters["wishlist/getWishlist"];
    },
  },
  methods: {
    ...mapActions("product", ["fetchSingleProduct", "fetchProduct"]),
    //keranjang
    ...mapActions("keranjang", ["fetchKeranjang"]),
    //menambah ke keranjang
    ...mapActions("product", ["addKeranjang"]),
    // tambahKeranjang(){
    ...mapActions("wishlist", ["fetchWishlist"]),
    ...mapActions("product", ["addWishlist"]),
    // },
    capitalizeFirstLetter(text) {
      return text.charAt(0).toUpperCase() + text.slice(1);
    },
    // Format Rupiah
    formatRupiah(number) {
      const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      });
      return formatter.format(number);
    },
    // Tambah Wishlist
    async addwishlist(productId) {
      await this.$store.dispatch("wishlist/addwishlist", productId);
      Swal.fire({
        title: "Product successfully added to wishlist !",
        icon: "success",
        confirmButtonText: "OK",
      });
    },
    // Hapus Wishlist
    ...mapActions("wishlist", ["deleteWishlist"]),
  },
  beforeMount() {
    this.fetchProduct();
    this.fetchKeranjang();
    this.fetchWishlist();
  },
  mounted() {
    const productId = this.$route.params.id;
    console.log("Fetching single product with ID:", productId);
    this.fetchSingleProduct(productId);

    const cektoken = localStorage.getItem("token");
    this.token = cektoken;
  },
};
</script>
