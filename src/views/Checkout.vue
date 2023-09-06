<template>
  <div
    class="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32"
  >
    <a href="#" class="text-2xl font-bold text-gray-800">PAYMENT..</a>
    <div class="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
      <div class="relative">
        <ul
          class="relative flex w-full items-center justify-between space-x-2 sm:space-x-4"
        >
          <li class="flex items-center space-x-3 text-left sm:space-x-4">
            <a
              class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
              href="#"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 13l4 4L19 7"
                /></svg
            ></a>
            <span class="font-semibold text-gray-900">Product</span>
          </li>
          <li class="flex items-center space-x-3 text-left sm:space-x-4">
            <a
              class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
              href="#"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 13l4 4L19 7"
                /></svg
            ></a>
            <span class="font-semibold text-gray-900">Cart</span>
          </li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
          <li class="flex items-center space-x-3 text-left sm:space-x-4">
            <a
              class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white"
              href="#"
              >-</a
            >
            <span class="font-semibold text-gray-500">Payment</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
    <div class="px-4 pt-8">
      <p class="text-xl font-medium">Order Summary</p>
      <p class="text-gray-400">
        Check your items. And select a suitable shipping method.
      </p>
      <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
        <div
          v-for="product in getKeranjang"
          :key="product.cart_id"
          class="flex flex-col rounded-lg bg-white sm:flex-row"
        >
          <img
            class="m-2 h-24 w-28 rounded-md border object-cover object-center"
            src="https://i.pinimg.com/236x/a4/27/63/a427633b708edc49c3cec523ad110058.jpg"
            alt=""
          />
          <div class="flex w-full flex-col px-4 py-4">
            <span class="font-semibold">{{ product.name }} </span>
            <span class="font-semibold">{{ product.variation_id }}</span>

            <span class="float-right text-gray-400">{{ product.qty }} pcs</span>
            <p class="text-lg font-bold">
              {{ formatRupiah(product.regular_price * product.qty) }}
            </p>
          </div>
        </div>
      </div>

      <p class="mt-8 text-lg font-medium">Delivery Option</p>
      <form class="mt-5 grid gap-6">
        <div class="relative">
          <input
            class="peer hidden"
            id="radio_1"
            type="radio"
            value="standard"
            v-model="deliveryType"
          />
          <span
            class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"
          ></span>
          <label
            class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
            for="radio_1"
          >
            <img
              class="w-14 object-contain"
              src="https://jnewsonline.com/wp-content/uploads/2021/11/Foto-2-Naskah-Mengenal-Sosok-Kreator-Logo-%E2%80%98Biru-Tua-Merah-JNE.jpg"
              alt=""
            />
            <div class="ml-5">
              <span class="mt-2 font-semibold">JNE - Express</span>
              <p class="text-slate-500 text-sm leading-6">Delivery: 1-2 Days</p>
            </div>
          </label>
        </div>
        <div class="relative">
          <input
            class="peer hidden"
            id="radio_2"
            type="radio"
            value="express"
            v-model="deliveryType"
          />
          <span
            class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"
          ></span>
          <label
            class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
            for="radio_2"
          >
            <img
              class="w-14 object-contain"
              src="https://blogger.googleusercontent.com/img/a/AVvXsEgl2JK7YYPlIzWWP5_IVHlPqYFwQC5YAjWLVrs1TPFMISid3jTZvkmHoZoivgXAeHGpcsIt0aWneuLKKm63N4lxBRgXI6cSnOfn8cOUtGEcWCD8bDV_-yfym8Nbq9kaMvxWztxbMDbUEjIUWwpLfnuR2a91_DUSxAa6LlUpW1_MLR9PKQ-pfCLD0X1JlA=s16000"
              alt=""
            />
            <div class="ml-5">
              <span class="mt-2 font-semibold">NINJA - Standard</span>
              <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
            </div>
          </label>
        </div>
      </form>
    </div>
    <div class="mt-12 bg-gray-100 px-9 pt-8 lg:mt-0">
      <p class="mt-8 text-lg font-medium">Shipping Methods</p>
      <form class="mt-5 grid gap-6">
        <div class="relative">
          <input
            class="peer hidden"
            id="radio_3"
            type="radio"
            value="cash_on_delivery"
            v-model="paymentType"
          />
          <span
            class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"
          ></span>
          <label
            class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
            for="radio_3"
          >
            <img
              class="w-14 object-contain"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG1T7vThrBBncN86DCcjOHBlx6SPOdEBSnI8bPUKWsbZfaoEbtuo799t24MYM_BwsvyGQ&usqp=CAU"
              alt=""
            />
            <div class="ml-5 mt-4">
              <span class="mt-2 font-semibold">Cash On Delivery</span>
              <!-- <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p> -->
            </div>
          </label>
        </div>
        <div class="relative">
          <input
            class="peer hidden"
            id="radio_4"
            type="radio"
            value="cash_on_delivery"
            v-model="deliveryType"
          />
          <span
            class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"
          ></span>
          <label
            class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
            for="radio_4"
          >
            <img
              class="w-14 object-contain"
              src="https://toppng.com/uploads/preview/pending-payment-icon-comments-wallet-money-icon-11553482802du1nfu8yvg.png"
              alt=""
            />
            <div class="ml-5 mt-4">
              <span class="mt-16 font-semibold leading-6">Payment Wallet</span>
              <!-- <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p> -->
            </div>
          </label>
        </div>
      </form>

      <p class="text-xl font-medium">Payment Details</p>
      <p class="text-gray-400">
        Complete your order by providing your payment details.
      </p>
      <div class="">
        <label for="email" class="mt-4 mb-2 block text-sm font-medium"
          >Email</label
        >
        <div class="relative">
          <input
            type="text"
            id="email"
            name="email"
            class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder="your.email@gmail.com"
          />
          <div
            class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </div>
        </div>
        <label for="card-holder" class="mt-4 mb-2 block text-sm font-medium"
          >Biling Address</label
        >
        <div class="relative">
          <input
            type="text"
            id="card-holder"
            name="card-holder"
            class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Your full address here"
          />
          <div
            class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
              />
            </svg>
          </div>
        </div>

        <div class="mt-6 flex items-center justify-between">
          <p class="text-sm font-medium text-gray-900">SubTotal</p>
          <p class="text-2xl font-semibold text-gray-900">
            {{ formatRupiah(totalHarga()) }}
          </p>
        </div>

        <div class="mt-6 flex items-center justify-between">
          <p class="text-sm font-medium text-gray-900">Shipping Charge</p>
          <p class="text-2xl font-semibold text-gray-900">
            {{ formatRupiah(15000) }}
          </p>
        </div>

       
       
      </div>
     


    </div>
    
    <router-link to="/order">
<center>
<button
  @click="performCheckout"
  class="mt-5 mb-4 w-full rounded-md bg-red-900 px-3 py-3 font-medium text-white"
  style="width: 1100px"
>
  Place Order
</button>
</center>
</router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      paymentType: "",
      deliveryType: "",
    };
  },
  computed: {
    ...mapGetters("keranjang", ["getKeranjang"]),
    ...mapGetters("keranjang", ["getCheckout"]),
    ...mapGetters("keranjang", ["getAddress"]),
    ...mapGetters("user", ["getUser"]),
  },
  methods: {
    ...mapActions("keranjang", ["fetchKeranjang"]),
    ...mapActions("product", ["fetchProduct"]),
    ...mapActions("product", ["fetchProduct"]),
    ...mapActions("keranjang", ["fetchAddress"]),
    ...mapActions("user", ["fetchUser"]),

    // Format Rupiah
         formatRupiah(number) {
            const formatter = new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR"
            });
            return formatter.format(number);
        },

    // total price
    totalHarga() {
      this.total = this.getKeranjang.reduce((acc, product) => {
        return acc + parseFloat(product.regular_price * product.qty );
      }, 0);

      return this.total.toFixed(2);
    },
    async performCheckout() {
      // Collect the product IDs to be checked out
      const cartItemIds = this.getKeranjang.map((product) => product.cart_id);
      // Get user address
      const userAddressResponse = await this.$store.dispatch(
        "keranjang/fetchAddress"
      );
      const userAddressId = userAddressResponse.data[0].id;

      const checkoutPayload = {
        shippingAddress: userAddressId,
        billingAddress: userAddressId,
        paymentType: this.paymentType,
        deliveryType: this.deliveryType,
        cart_item_ids: cartItemIds,
      };

      // Call the checkout action with the collected IDs and user address
      await this.$store
        .dispatch("keranjang/checkoutCart", checkoutPayload)
        .then(() => {
          this.$router.push(`/order/${this.getCheckout.order_code}`);
        });
    },
  },
  beforeMount() {
    this.fetchProduct();
    this.fetchAddress();
  },

  mounted() {
    this.fetchKeranjang();
    this.fetchAddress();
  },
  created() {
    this.fetchAddress();
    this.fetchUser();
  },
};
</script>
