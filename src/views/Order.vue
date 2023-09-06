<template>
  <div><center><img src="https://o.remove.bg/downloads/e439e13b-9fb7-45a8-bec9-144a401dbfac/png-transparent-round-green-check-mark-illustration-check-mark-bottle-material-green-tick-miscellaneous-angle-company-removebg-preview.png" style="width: 200px; "></center></div>
      <div class="message text-center" >
        <h1 class="text-3xl font-bold pt-10">Thank You for Your Order</h1>
        <p>Order Code : {{ getOrder.code }}</p>
        <p class="italic">
          A copy of your order summary has been sent to {{ getOrder.user.email }}
        </p>
      </div>
      <div class="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
  <div class="overflow-y-hidden rounded-lg border">
    <div class="overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr class=" text-left text-xs font-semibold uppercase tracking-widest text-white" style="background-color: blue;">
            <th class="px-5 py-3"></th>
            <th class="px-5 py-3"><b> Order Summary</b></th>
            <th class="px-5 py-3"></th>
            <th class="px-5 py-3"></th>
            <th class="px-5 py-3"></th>
          </tr>
        </thead>
        <tbody class="text-gray-500">
          <tr>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap"></p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap" style="color: black;"><b>Order Code :</b></p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">{{ getOrder.code }}</p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap" style="color: black;"><b>Total Order Amount :</b></p>
            </td>

            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap"> {{ formatRupiah(getOrder.orders[0].grand_total) }}</p>
            </td>
          </tr>
          <tr>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap"></p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap" style="color: black;"><b>Name :</b></p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">{{ getOrder.user.name }}</p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap" style="color: black;"><b>Payment Method :</b></p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">{{ getOrder.orders[0].payment_type }}</p>
            </td>
          </tr>
          <tr>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap"></p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap" style="color: black;"><b>Email :</b></p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">{{ getOrder.user.email }}</p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap" style="color: black;"><b>Delivery Type :</b></p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">{{ getOrder.orders[0].delivery_type }}</p>
            </td>
          </tr>
          <tr>
            <td class="bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap"></p>
            </td>
            <td class="bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap" style="color: black;"><b>Number Phone :</b></p>
            </td>
            <td class="bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">{{ getOrder.shipping_address.phone }}</p>
            </td>
            <td class="bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap" style="color: black;"><b>Billing Address :</b></p>
            </td>
            <td class="bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap"> {{ getOrder.shipping_address.address }}, {{ getOrder.shipping_address.city }}, {{
                    getOrder.shipping_address.state }}, {{ getOrder.shipping_address.country }}, {{
    getOrder.shipping_address.postal_code }}</p>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      </div>
      

      <div  class="overflow-y-hidden rounded-lg border">
  <div class="overflow-x-auto">
    <table class="w-full">
      <thead>
        <tr class="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
          <th class="px-5 py-3">ID</th>
          <th class="px-5 py-3">Product</th>
          <th class="px-5 py-3">Quantity</th>
          <th class="px-5 py-3">Unit Price</th>
          <th class="px-5 py-3">Total</th>
        </tr>
      </thead>
      <tbody class="text-gray-500"  v-for="(order) in getOrder.orders[0].products.data">
        <tr>
          <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
            <p class="whitespace-no-wrap">{{ order.id }}</p>
          </td>
          <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
            <div class="flex items-center">
              <div class="h-10 w-10 flex-shrink-0">
                <img class="h-full w-full rounded-full" src="https://i.pinimg.com/236x/a4/27/63/a427633b708edc49c3cec523ad110058.jpg" alt="" />
              </div>
              <div class="ml-3">
                <p class="whitespace-no-wrap">{{ order.name }}</p>
              </div>
            </div>
          </td>
          <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
            <p class="whitespace-no-wrap">{{ order.quantity }} pcs</p>
          </td>
          <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
            <p class="whitespace-no-wrap">{{ formatRupiah(order.price) }}</p>
          </td>

          <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
            <span class="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">{{ formatRupiah(order.total) }}</span>
          </td>
        </tr>
       
      </tbody>
      <tr>
         <td colspan="3" rowspan="3"><center><img src="https://png.pngtree.com/png-clipart/20210523/original/pngtree-cash-on-delivery-pin-point-png-image_6331307.jpg" style="width: 150px; height: 150px; margin-left: -100px;" alt=""></center></td>
         <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
           <p class="whitespace-no-wrap"><b>Sub Total :</b></p>
         </td>

         <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
           <span class="rounded-full bg-yellow-200 px-3 py-1 text-xs font-semibold text-yellow-900">{{ formatRupiah(getOrder.grand_total) }}</span>
         </td>
       </tr>
       <tr>
        
        <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
          <p class="whitespace-no-wrap"><b>Coupon Discount :</b></p>
        </td>

        <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
          <span class="rounded-full bg-yellow-200 px-3 py-1 text-xs font-semibold text-yellow-900">Rp.0</span>
        </td>
      </tr>
       <tr>
        
        <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
          <p class="whitespace-no-wrap"><b>Shipping Charge :</b></p>
        </td>

        <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
          <span class="rounded-full bg-yellow-200 px-3 py-1 text-xs font-semibold text-yellow-900">Rp 15.000,00</span>
        </td>
        
      </tr>
       <tr class="bg-blue-600 text-right text-xs font-semibold uppercase tracking-widest text-white">
         <th class="px-5 py-2" colspan="4" >Total</th>
         <th class="px-5 py-3">{{ formatRupiah(getOrder.grand_total + 15000) }}</th>
         
       </tr>
    </table>
  </div>
  
</div>

</div>
    
</template>
  
<script>
import { mapActions, mapGetters,  } from 'vuex';
export default {
  computed: {
    ...mapGetters('order', ['getOrder']),
    ...mapGetters('keranjang', ['getAddress']),
    ...mapGetters('keranjang', ['getKeranjang']),
    calculateTotal() {
      return this.getKeranjang.reduce((total, cartItem) => {
        return total + cartItem.regular_price * cartItem.qty;
      }, 0);
    },
  },
  props: ['orderCode'],
  methods: {
        ...mapActions('keranjang', ['fetchKeranjang']),
        ...mapActions('keranjang', ['fetchAddress']),
        ...mapActions('order', ['fetchOrderData']),

        // Format Rupiah
        formatRupiah(number) {
            const formatter = new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR"
            });
            return formatter.format(number);
        },


  },
  beforeMount() {
        this.fetchKeranjang();
        this.fetchAddress()

    },
  created() {
    this.fetchKeranjang();
    this.fetchAddress(),

    this.$store.dispatch('order/fetchOrderData', this.orderCode);
  },
};
</script>