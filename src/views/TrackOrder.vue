<template>
    <div style="margin-top: 100px;">
        <div class="flex-auto p-6 ">
            
            <center>
        <form  >
            <div>
          <label class=""> Order Code </label>
          <input
            type="text"
            placeholder="Track Order Code "
            class="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
          />
        </div>
    
          <div class="mb-4">
            <button
                    @click="fetchTrackOrder(product.id)"
                    type="button" style="width: 300px; height: 20px;"
                    class="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-blue-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-yellow-800"
                  >
             Track
            </button>
          </div>
        </form>
    </center>
    </div></div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("order", ["getOrder", "getTrackOrder"]),
    ...mapGetters("keranjang", ["getAddress"]),
    ...mapGetters("keranjang", ["getKeranjang"]),
    calculateTotal() {
      return this.getKeranjang.reduce((total, cartItem) => {
        return total + cartItem.regular_price * cartItem.qty;
      }, 0);
    },
  },
  props: ["orderCode"],
  methods: {
    ...mapActions("keranjang", ["fetchKeranjang"]),
    ...mapActions("keranjang", ["fetchAddress"]),
    ...mapActions("order", ["fetchOrderData", "fetchTrackData"]),

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
    this.fetchAddress();
  },
  created() {
    this.fetchKeranjang();
    this.fetchAddress(),
      this.$store.dispatch("order/fetchTrackData", this.orderCode);
  },
};
</script>
