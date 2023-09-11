<template>
  <div v-if="getKeranjang.length == 0" style="margin-top: 80px;" >
    <br />
    <center>
      <div
        class="p-3 mb-0 text-sm text-black-800 rounded-lg  dark:bg-black-800 dark:text-black-300"
        role="alert"
      >
        <span class="font-medium">No Items</span><br> Enter Item
        Your Shop Now
      </div>
    </center>
    <center>
      <img src="../assets/img/masukker.avif" style="width: 40%" />
    </center>
    <center>
      <br />
      <button
        @click="belanja"
        style="background: blue"
        type="button"
        class="focus:outline-none text-white bg-black-400 hover:bg-black-500 focus:ring-4 focus:ring-black-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-black-900"
      >
      Let's Shop Now      </button>
    </center>
  </div>

  <div class="container mx-auto px-4 py-8" style="margin-top: 70px;">
    <center>
      <div
        class="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-150 dark:bg-gray-800 dark:text-blue-400"
        role="alert"
      >
        <span class="font-medium"></span>
        <h1 class="mb-5 text-center text-2xl font-bold">Customer’s Cart</h1>
      </div>
    </center>

    <div class="rounded-lg md:w-" >
      <div
        v-for="cart in getKeranjang"
        key="cart.cart_id"
        class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
      >
        <img
          src="../assets/img/product.jpg"
          alt="product-image"
          class="w-full rounded-lg sm:w-40"
        />
        <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div class="mt-5 sm:mt-0">
            <h2 class="text-lg font-bold text-gray-900">{{ cart.name }}</h2>
            <p class="mt-1 text-xs text-gray-700">{{ cart.variation_id }}</p>
          </div>

         

          <div
            class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6"
          >
            <div class="flex items-center border-gray-100">
              <span
                @click="editKeranjang({ cart_id: cart.cart_id, type: 'minus' })"
                class="cursor-pointer rounded-l bg-gray-200 py-1 px-3.5 duration-100 hover:bg-red-500 hover:text-red-50"
              >
                -
              </span>
              {{ cart.qty }}
              <span
                @click="editKeranjang({ cart_id: cart.cart_id, type: 'plus' })"
                class="cursor-pointer rounded-r bg-gray-200 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
              >
                +
              </span>
            </div>
            <!-- <svg class="h-8 w-8 text-blue-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
</svg> -->

            <div
              @click="deleteKeranjang(cart.cart_id)"
              class="flex items-center space-x-4"
            >
              <p class="text-sm">{{ formatRupiah(cart.regular_price) }}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sub total -->
    <div
      class="mt-6 h-full rounded-lg border bg-blue p-6 shadow-md md:mt-0 md:w- text-center" 
    >
      <div class="mb-5 flex justify-between" >
        <p class="text-gray-700">Subtotal</p>
        <p class="text-gray-700">{{ formatRupiah(calculateTotal) }}</p>
      </div>
      <!-- <div class="flex justify-between">
                        <p class="text-gray-700">Shipping</p>
                        <p class="text-gray-700">$4.99</p>
                    </div> -->
      <hr class="my-4" />
      <div class="flex justify-between">
        <p class="text-lg font-bold">Total</p>
        <div class="">
          <p class="mb-1 text-lg font-bold">
            {{ formatRupiah(calculateTotal) }}
          </p>
          <p class="text-sm text-gray-900"></p>
        </div>
      </div>

      <div v-if="getKeranjang.length != 0">
        <router-link to="/checkout">
          <button
            class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-purple-50 hover:bg-red-600"
          >
            Check Out
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import checkout from "@/store/modules/checkout";
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      counter: 0,
      pilihs: [],
      pilihiid: "",
    };
  },
  computed: {
    ...mapGetters("keranjang", ["getKeranjang"]),
    ...mapGetters("checkout", ["getaddress"]),
    calculateTotal() {
      return this.getKeranjang.reduce((total, cartItem) => {
        return total + cartItem.regular_price * cartItem.qty;
      }, 0);
    },
  },
  methods: {
    ...mapActions("keranjang", [
      "deleteKeranjang",
      "editKeranjang",
      "fetchKeranjang",
    ]),
    show(items) {
      let total = 0;
      items.data.forEach((element) => {
        total += element.regular_price * element.qty;
      });
      return total;
    },
    belanja() {
      this.$router.push("/product");
    },
    checkout() {
      this.$router.push("/checkout");
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
};
</script>
