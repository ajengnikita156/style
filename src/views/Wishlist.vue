<template>
    <div style="margin-top: 100px;">
    <center><h1><b>Your Wishlist</b></h1>

</center>

<div class="container">
        <div class="flex flex-col">
          <div
            class="flex overflow-x-scroll no-scollbar"
            data-slider-target="scrollContainer"
          >
            <div
              v-for="wishlist in getWishlist"
              class="px-4 flex-shrink-0"
              data-slider-target="image"
            >
              <a
                href="#"
                class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <img
                  class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                  src="../assets/img/product.jpg"
                  alt=""
                />
              </a>
              <div class="flex flex-col justify-between p-4 leading-normal">
              <h5
                class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                {{ wishlist.name }}

              </h5>
              <h5
                class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                {{ formatRupiah(wishlist.base_discounted_price) }}
                
              </h5>
            </div>
            
            </div>
          </div>
        </div>
      </div>
</div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("wishlist", ["getWishlist"]),
  },
  methods: {
    ...mapActions("wishlist", ["fetchWishlist"]),
    wishlist() {
      this.$router.push("/wishlists");
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
    this.fetchWishlist();
  },
  mounted() {
    this.fetchWishlist();
  },
};
</script>

