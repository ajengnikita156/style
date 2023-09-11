<template>
  <div class="dark:text-white" style="margin-top: 30px;">
    <div class="flex flex-col">
      <div class="px-4 w-full xl:max-w-7xl xl:mx-auto">
        <h2 class="text-center text-3xl my-20 font-semibold"></h2>

        <!-- Kategori -->
        <div class="p-4 border my-8 dark:border-gray-900 shadow-md rounded-2xl">
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
        <div class="p-4 border my-8 dark:border-gray-600 shadow-md rounded-2xl">
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
    ...mapGetters("product", ["getProduct"]),
    ...mapGetters("brand", ["getBrand"]),
    ...mapGetters("kategori", ["getKategori"]),
  },
  methods: {
    ...mapActions("product", ["fetchProduct"]),
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
};
</script>
