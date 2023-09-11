<template>
  <center>
    <div class="m-10 max-w-sm" style="margin-top: 100px">
      <div class="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
        <div class="relative mx-auto w-36 rounded-full">
          <img
            class="mx-auto h-auto w-full rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5sbcmkeP9sVulyi_8lhSnIrs7nji0F-YfRQ&usqp=CAU"
            alt=""
          />
        </div>
        <h1 class="my-1 text-center text-xl font-bold leading-8 text-black">
          {{ userData.name }}
        </h1>
        <h3 class="font-lg text-semibold text-center leading-6 text-black">
          {{ userData.email }}
        </h3>
        <ul
          class="mt-3 divide-y rounded bg-blue-100 py-2 px-3 text-black-600 shadow-sm hover:text-black hover:shadow"
        >
          <li class="flex items-center py-3 text-sm">
            <span>Number Phone</span>
            <span class="ml-auto"
              ><span
                class="rounded-full bg-blue-300 py-1 px-2 text-xs font-medium text-black-700"
                >{{ address.phone }}</span
              ></span
            >
          </li>
        </ul>
        <ul
          class="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-black-600 shadow-sm hover:text-black hover:shadow"
        >
          <li class="flex items-center py-3 text-sm">
            <span>Address</span>
            <span class="ml-auto"
              ><span
                class="rounded-full bg-blue-300 py-1 px-2 text-xs font-medium text-black-700"
                >{{ address.address }},{{ address.city }},{{ address.state }},{{
                  address.country
                }}</span
              ></span
            >
          </li>
        </ul>
        <ul
          class="mt-3 divide-y rounded bg-blue-100 py-2 px-3 text-black-600 shadow-sm hover:text-black hover:shadow"
        >
          <li class="flex items-center py-3 text-sm">
            <span>In Cart</span>
            <span class="ml-auto"
              ><span
                class="rounded-full bg-blue-300 py-1 px-2 text-xs font-medium text-black-700"
                >{{ getKeranjang.length }}</span
              ></span
            >
          </li>
        </ul>
        <ul
          class="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-black-600 shadow-sm hover:text-black hover:shadow"
        >
          <li class="flex items-center py-3 text-sm">
            <span>In Wishlist</span>
            <span class="ml-auto"
              ><span
                class="rounded-full bg-blue-300 py-1 px-2 text-xs font-medium text-black-700"
                >8</span
              ></span
            >
          </li>
        </ul>
        <ul
          class="mt-3 divide-y rounded bg-blue-100 py-2 px-3 text-black-600 shadow-sm hover:text-black hover:shadow"
        >
          <li class="flex items-center py-3 text-sm">
            <span>Ordered</span>
            <span class="ml-auto"
              ><span
                class="rounded-full bg-blue-300 py-1 px-2 text-xs font-medium text-black-700"
                >{{ getDasboard.total_order_products }}</span
              ></span
            >
          </li>
        </ul>
      </div>
    </div>
  </center>

  <center>
    <div class="container">
      <div>
        <br />
        <b>
          Recent Purchase History :
          {{ getDasboard.recent_purchased_products.data.length }}</b
        >
        <div class="container mx-auto px-4 py-8">
          <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-2">
            <div class="grid md:grid-cols-4 gap-8">
              <div
                v-for="item in getDasboard.recent_purchased_products.data"
                :key="item.id"
                class="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300"
              >
                <img
                  class="rounded-xl"
                  src="https://i.pinimg.com/236x/a4/27/63/a427633b708edc49c3cec523ad110058.jpg"
                />
                <div class="flex justify-between items-center">
                  <div>
                    <h1
                      style="float: left"
                      class="mt-5 pr-4 text-2xl font-semibold"
                    >
                      {{ item.name }}
                    </h1>
                    <br /><br /><br />
                    <span style="float: left">{{ item.id }}</span>
                    <br />
                    <span style="float: left">{{
                      formatRupiah(item.base_price)
                    }}</span>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </center>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      uData: [],
    };
  },
  computed: {
    ...mapState("users", ["userData"]),
    ...mapState("keranjang", ["address"]),
    ...mapGetters("keranjang", ["getAddress"]),
    ...mapGetters("keranjang", ["getKeranjang"]),
    ...mapGetters("users", ["getDasboard"]),
  },
  methods: {
    ...mapActions("users", ["fetchUser", "fetchDasboard"]),
    ...mapActions("keranjang", ["fetchKeranjang"]),

    ...mapActions("keranjang", ["fetchAddress"]),
    // Format Rupiah
    formatRupiah(number) {
      const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      });
      return formatter.format(number);
    },
  },
  created() {
    this.uData = this.fetchUser();
    this.fetchAddress();
    this.fetchKeranjang();
    this.fetchDasboard();
  },
};
</script>
