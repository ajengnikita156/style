<template>
  <div class="dark:text-white" style="margin-top: 30px;">
    <div class="flex flex-col">
      <div class="px-4 w-full xl:max-w-7xl xl:mx-auto">
        <h2 class="text-center text-3xl my-20 font-semibold"></h2>


        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-9">
        <p class="text-gray-900 text-2xl title-font font-medium mb-4 ml-3">Flash Sale</p>
        <div class="grid md:grid-cols-3 gap-8">
            <div v-for="product in getFlashProduct" :key="product.id"
                class="product-card w-full bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">

                <router-link :to="{ name: 'SingleProduct', params: { id: product.id } }" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row
                    md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full rounded-t-lg md:h-auto ml-4 md:w-28 md:rounded-none md:rounded-l-lg"
                        src="../assets/img/flash.png" alt="">
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <p class="text-lg font-bold text-black truncate block capitalize"></p>
                        {{ product.name }}
                        <p class="text-sm font-bold text-gray-600 truncate block capitalize mt-2 mb-4">{{
                            formatRupiah(product.base_price) }}
                        </p>
                        <div class="flex items-center">
                            <p class="text-sm font-bold text-black truncate block capitalize mt-2">Buy Now</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5 ml-28 mt-2">
                                <path stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5 ml-4 mt-2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>

                        </div>

                    </div>
                </router-link>

            </div>
        </div>
    </div>
        <!-- Kategori -->
        <div class="p-4 border my-2 dark:border-gray-900 shadow-md rounded-2xl">
          <div class="flex flex-wrap">
            <div class="me-auto my-2">
              <h2 class="font-semibold text-xl">Popular Categories</h2>
            </div>
            <div class="my-2">
              <RouterLink
                class="text-blue-600 hover:underline dark:text-blue-400"
                to="/kategori"
              >
                View All
                <i class="bi bi-chevron-right"></i>
              </RouterLink>
            </div>
          </div>
          <div
            class="p-3 snap-mandatory snap-x flex overflow-auto no-scrollbar"
          >
            <div
              v-for="kategori in getKategori.data.slice(0, 12)"
              class="snap-center"
            >
              <RouterLink to="#">
                <div
                  class="mx-4 py-7 px-2 border w-56 rounded-lg hover:bg-gray-200 hover:shadow-md hover:dark:bg-gray-700 dark:border-gray-700 transition-all"
                >
                  <img
                    class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src="../assets/img/kategorii.png" style="width: 150px;"
                    alt=""
                  />

                  <h2 class="text-center font-bold text-lg">
                    {{ kategori.name }}
                  </h2>
                 
                </div>
              </RouterLink>
            </div>
          </div>
        </div>

        <!-- Produk -->
        <!-- <div class="p-4 border my-8 dark:border-gray-600 shadow-md rounded-2xl">
          <div class="flex flex-wrap">
            <div class="me-auto my-2">
              <h2 class="font-semibold text-xl">Flash Sale</h2>
            </div>
            <div class="my-2">
              <RouterLink
                class="text-blue-600 hover:underline dark:text-blue-400"
                to="/"
              >
                View All
                <i class="bi bi-chevron-right"></i>
              </RouterLink>
            </div>
          </div>
          <div
            class="p-3 snap-mandatory snap-x flex overflow-auto no-scrollbar"
          >
            <div v-for="product in getProduct.slice(0, 12)" class="snap-center">
              <RouterLink :to="'/product/' + product.id">
                <div
                  class="mx-4 py-7 px-2 border w-56 rounded-lg hover:bg-gray-200 hover:shadow-md hover:dark:bg-gray-700 dark:border-gray-700 transition-all"
                >
                  <img
                    class="p-8 rounded-t-lg" style="width: 300px;"
                    src="../assets/img/flash.png"
                    alt="product image"
                  />
                  <h2 class="text-center font-bold text-lg">
                    {{ product.name }}
                  </h2>
                  <h2 class="text-center text-gray-600 dark:text-gray-400">
                    {{ formatRupiah(product.base_price) }}
                  </h2>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
 -->

      

        <!-- Brand -->
        <div class="p-4 border my-2 dark:border-gray-600 shadow-md rounded-2xl">
          <div class="flex flex-wrap">
            <div class="me-auto my-2">
              <h2 class="font-semibold text-xl">Brand</h2>
            </div>
            <div class="my-2">
              <RouterLink
                class="text-blue-600 hover:underline dark:text-blue-400"
                to="/brand"
              >
                View All
                <i class="bi bi-chevron-right"></i>
              </RouterLink>
            </div>
          </div>
          <div
            class="p-3 snap-mandatory snap-x flex overflow-auto no-scrollbar"
          >
            <div v-for="brand in getBrand.data.slice(0, 8)" class="snap-center">
              <RouterLink to="#">
                <div
                  class="mx-4 py-7 px-2 border w-56 rounded-lg hover:bg-gray-200 hover:shadow-md hover:dark:bg-gray-700 dark:border-gray-700 transition-all"
                >
                  <img
                    class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src="../assets/img/brandd.png" style="width: 180px;"
                    alt=""
                  />
                  <h2 class="text-center font-bold text-lg">
                    {{ brand.name }}
                  </h2>
               
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("product", ["getProduct","getFlashProduct"]),
    ...mapGetters("brand", ["getBrand"]),
    ...mapGetters("kategori", ["getKategori"]),
  },
  methods: {
    ...mapActions("product", ["fetchProduct","fetchFlashProduct"]),
    ...mapActions("kategori", ["fetchKategori"]),
    ...mapActions("brand", ["fetchBrand"]),
    ...mapActions("keranjang", ["fetchKeranjang"]),
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
  },
  beforeMount() {
    this.fetchKeranjang();
    this.fetchBrand();
    this.fetchProduct();
    this.fetchKategori();
  },

  mounted() {
    this.fetchProduct();
    this.fetchKategori();
    this.fetchBrand();
  },
  created() {
        this.fetchProduct(),
            this.fetchFlashProduct()
    },
};
</script>
