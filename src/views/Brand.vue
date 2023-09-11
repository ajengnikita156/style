<template>
  <div class="py-4 px-4 mx-auto max-w-screen-xl lg:py-16" style="margin-top: 30px;">
    <br />
    <center>
      <div class="container">
        <b style="float: left; padding-left: 30px">Popular Brand</b>
        <router-link to="/brand">
          <a style="float: right; padding-right: 30px">
            <b>View All Brand &nbsp; </b
            ><i class="bi bi-arrow-right-square-fill"></i>
          </a>
        </router-link>
      </div>
      <br />
      <br />
      <div class="container">
        <div class="flex flex-col" data-controller="slider">
          <div
            class="flex overflow-x-scroll no-scollbar"
            data-slider-target="scrollContainer"
          >
            <div
              v-for="brand in getBrand.data.slice(0, 8)"
              class="px-4 flex-shrink-0"
              data-slider-target="image"
            >
              <a
                href="#"
                class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <img
                  class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                  src="../assets/img/brandd.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </center>
    <br />
    <br />

    <div class="mt-0 text-center">
      <span class="font-bold text-4xl">All Brands</span>
    </div>
    <div class="grid grid-cols-4 gap-6 mt-5">
      <div v-for="brand in getBrand.data.slice(0, 8)" :key="brand.id">
        <router-link :to="{ name: 'FilterBrand', params: { id: brand.id } }">
          <a
            href="#"
            class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src="../assets/img/brandd.png"
              alt=""
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5
                class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                {{ brand.name }}
              </h5>
            </div>
          </a>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("brand", ["getBrand"]),
    ...mapGetters("product", ["getProduct"]),
  },
  methods: {
    ...mapActions("brand", ["fetchBrand"]),
    ...mapActions("product", ["fetchProduct"]),
    ...mapActions("keranjang", ["fetchKeranjang"]),
  },
  beforeMount() {
    this.fetchBrand();
    this.fetchKeranjang();
  },
  mounted() {
    this.fetchProduct();
  },
};
</script>
