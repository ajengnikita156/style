<template>
    <div
    class="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32" style="margin-top: 90px;"
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
              class="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-xs font-semibold text-white"
              href="#"
              ><b>---</b></a
            > <span class="font-semibold text-black-500">Payment</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
    <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
      <div class="px-4 pt-8">
        <p class="text-xl font-medium">Order Summary</p>
        <p class="text-gray-400">
            Check your items. and select a suitable shipping method
        </p>
        <div
         v-for="product in getKeranjang"
          :key="product.cart_id"
          class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6"
        >
          <div class="flex flex-col rounded-lg bg-white sm:flex-row">
            <img
              class="m-2 h-24 w-28 rounded-md border object-cover object-center"
              src="../assets/img/product.jpg"
              alt=""
            />
            <div class="flex w-full flex-col px-4 py-4">
              <span class="font-semibold"
                >{{product.name}}</span
              >
              <span class="float-right text-gray-400">{{product.variation_id}} </span>
              <p class="text-lg font-bold">{{ formatRupiah(product.regular_price * product.qty) }}</p>
            </div>
          </div>
        </div>

        <br>
    <center>
      <div class="container">
        <button v-if="showalamats == false" @click="showalamat" type="button" style="width: 90%;" class="text-white bg-blue-500 hover:bg-red-500 focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">View All Addresses Checkout</button>
        <button v-if="showalamats == true" @click="hidealamat" type="button" style="width: 90%;" class="text-white bg-blue-500 hover:bg-red-500 focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">Close All Addresses Checkout</button>
      </div>
    </center>
    <center v-if="showalamats == true">
      <div class="container">
       <div class="flex flex-wrap justify-center" >
        <div v-if="address.length != 0">
          <div v-for="addressData in address" :key="addressData.id">
            <div style="background: white; border: 2px solid grey;"  class="m-3 w-[250px] group hover:shadow-md bg-white hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:bg-opacity-[.5] transition-all border cursor-pointer rounded-t-lg rounded-b-lg">
              <div class="my-5" style="color: black;">
                  {{ addressData.address }}, {{ addressData.postal_code }}
                  <br />
                  {{ addressData.city }}, {{ addressData.state }},
                  {{ addressData.country }} <br />
                  {{ addressData.phone }}
                </div>
                <button class="focus:outline-none text-white bg-blue-700 hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" @click="hapus(addressData.id)">delete address</button> 
            </div>
        </div>
        </div>
        <div v-else>
          <div class="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
            <span class="font-medium">No Address</span> Enter The Address 
          </div>
        </div>
  
     </div>
     </div>
    </center>
    <br>
      </div>

            <div class="mt-0 bg-gray-100 px-9 pt-8 ">
              
      
      <div class="flex flex-col"></div>
            <div class="my-6">
              <p class="mt-8 text-lg font-medium">Delivery Option</p>
              <div class="">
                <div class="">
                  <input
                    v-model="delivery_type"
                    type="radio"
                    name="delivery_type"
                    id="standard"
                    value="standard"
                    class="hidden"
                  />
                  <label for="standard">
                    <div
                      class="m-3 border dark:border-gray-600 p-4 rounded-lg"
                      :class="{
                        'border-4': delivery_type == 'standard',
                        'border-blue-400': delivery_type == 'standard',
                        'dark:border-blue-600': delivery_type == 'standard',
                        'bg-blue-600': delivery_type == 'standard',
                        'bg-opacity-20': delivery_type == 'standard',
                      }"
                    >
                      <div>
                        <img
                class="w-10 object-contain"
                src="https://blogger.googleusercontent.com/img/a/AVvXsEgl2JK7YYPlIzWWP5_IVHlPqYFwQC5YAjWLVrs1TPFMISid3jTZvkmHoZoivgXAeHGpcsIt0aWneuLKKm63N4lxBRgXI6cSnOfn8cOUtGEcWCD8bDV_-yfym8Nbq9kaMvxWztxbMDbUEjIUWwpLfnuR2a91_DUSxAa6LlUpW1_MLR9PKQ-pfCLD0X1JlA=s16000"
                alt=""
              />
                        <h2 class="font-bold text-lg"  style="text-align: left;">Standard</h2>
                      </div>
                    </div>
                  </label>
                </div>
                <div class="">
                  <input
                    v-model="delivery_type"
                    type="radio"
                    name="delivery_type"
                    id="express"
                    value="express"
                    class="hidden"
                  />
                  <label for="express">
                    <div
                      class="m-3 border dark:border-gray-600 p-4 rounded-lg"
                      :class="{
                        'border-4': delivery_type == 'express',
                        'border-blue-400': delivery_type == 'express',
                        'dark:border-blue-600': delivery_type == 'express',
                        'bg-blue-600': delivery_type == 'express',
                        'bg-opacity-20': delivery_type == 'express',
                      }"
                    >
                      <div>
                        <img
                class="w-10 object-contain"
                src="https://jnewsonline.com/wp-content/uploads/2021/11/Foto-2-Naskah-Mengenal-Sosok-Kreator-Logo-%E2%80%98Biru-Tua-Merah-JNE.jpg"
                alt=""
              />
                        <h2 class="font-semibold text-lg">Express</h2>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            
        <div class="px-0 w-full xl:max-w-2xl xl:mx-auto">
          <button style="float: right;"
            v-if="showdev == false"
            @click="show"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            + ADDRESS
          </button><br>
          <button  style="float: right; background:red;"
            v-if="showdev == true"
            @click="tutupshow"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Close
          </button>


          <div v-show="showdev == true">
            <form @submit.prevent="tambah" class="mt-0 grid gap-6">
              <div class="flex flex-col" style="width: 100%">
                <div class="p-5">
                  <div>
                    <div class="mb-6">
                      <label
                        for="address"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Alamat</label
                      >
                      <textarea
                        id="address"
                        v-model="addAddress.address"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        cols="30"
                        rows="2"
                      ></textarea>
                    </div>
                    <div class="mb-6">
                      <label
                        for="postal_code"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Kode Pos</label
                      >
                      <input
                        type="text"
                        id="postal_code"
                        v-model="addAddress.postal_code"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                    <div class="mb-6">
                      <label
                        for="country"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Negara</label
                      >
                      <!-- <input type="text" id="country" v-model="addAddress.country"
                                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"> -->
                      <select
                        id="country"
                        v-model="addAddress.country"
                        @change="fetchAllStates(addAddress.country)"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option
                          v-for="country in countries"
                          :key="country.id"
                          :value="country.id"
                        >
                          {{ country.name }}
                        </option>
                      </select>
                    </div>
                    <div class="mb-6">
                      <label
                        for="state"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Provinsi</label
                      >
                      <!-- <input type="text" id="state" v-model="addAddress.state"
                                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"> -->
                      <select
                        id="state"
                        v-model="addAddress.state"
                        @change="fetchAllCities(addAddress.state)"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option
                          v-for="state in states"
                          :key="state.id"
                          :value="state.id"
                        >
                          {{ state.name }}
                        </option>
                      </select>
                    </div>
                    <div class="mb-6">
                      <label
                        for="city"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Kota</label
                      >
                      <!-- <input type="text" id="city" v-model="addAddress.city"
                                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"> -->
                      <select
                        id="city"
                        v-model="addAddress.city"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option
                          v-for="city in cities"
                          :key="city.id"
                          :value="city.id"
                        >
                          {{ city.name }}
                        </option>
                      </select>
                    </div>
                    <div class="mb-6">
                      <label
                        for="phone"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Nomor Telepon</label
                      >
                      <input
                        type="text"
                        id="phone"
                        v-model="addAddress.phone"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                    
                   
                    <div class="flex justify-end">
                      <button
                          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-1 md:mr-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Tambah Alamat
                      </button>
                  </div>
  
                  </div>
                </div>
              </div>
          
            </form>
          </div>

          <form v-show="showdev == false" @submit.prevent="orderadd">
            <h2 class="text-center text-2xl my- font-semibold"></h2>
            <div v-if="!!address" class="my-6">
              <h2 class="font-semibold text-lg">Shipping Address</h2>
              <div class="">
                <div
                  class=""
                  v-for="addressData in address"
                  :key="addressData.id"
                >
                  <input
                    v-model="shipping_address_id"
                    type="radio"
                    name="shipping_address_id"
                    :id="'shipping_address_' + addressData.id"
                    :value="addressData.id"
                    class="hidden"
                  />
                  <label :for="'shipping_address_' + addressData.id">
                    <div
                      class="m-3 border dark:border-gray-600 p-4 rounded-lg"
                      :class="{
                        'border-4': shipping_address_id == addressData.id,
                        'border-blue-400': shipping_address_id == addressData.id,
                        'dark:border-blue-600':
                          shipping_address_id == addressData.id,
                        'bg-blue-600': shipping_address_id == addressData.id,
                        'bg-opacity-20': shipping_address_id == addressData.id,
                      }"
                    >
                      <div>
                        {{ addressData.address }}, {{ addressData.postal_code }}
                        <br />
                        {{ addressData.city }}, {{ addressData.state }},
                        {{ addressData.country }} <br />
                        {{ addressData.phone }}
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
  
            <div v-if="!!address" class="my-6">
              <h2 class="font-semibold text-lg">Billing Address</h2>
              <div class="">
                <div
                  class=""
                  v-for="addressData in address"
                  :key="addressData.id"
                >
                  <input
                    v-model="billing_address_id"
                    type="radio"
                    name="billing_address"
                    :id="'billing_address_' + addressData.id"
                    :value="addressData.id"
                    class="hidden"
                  />
                  <label :for="'billing_address_' + addressData.id">
                    <div
                      class="m-3 border dark:border-gray-600 p-4 rounded-lg"
                      :class="{
                        'border-4': billing_address_id == addressData.id,
                        'border-blue-400': billing_address_id == addressData.id,
                        'dark:border-blue-600':
                          billing_address_id == addressData.id,
                        'bg-blue-600': billing_address_id == addressData.id,
                        'bg-opacity-20': billing_address_id == addressData.id,
                      }"
                    >
                      <div>
                        {{ addressData.address }}, {{ addressData.postal_code }}
                        <br />
                        {{ addressData.city }}, {{ addressData.state }},
                        {{ addressData.country }} <br />
                        {{ addressData.phone }}
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            
  
          <div class="my-6">
              <h2 class="font-semibold text-lg">Shipping Methods</h2>
              <div class="flex flex-wrap">
                <div class="">
                  <input
                    v-model="payment_type"
                    type="radio"
                    name="payment_type"
                    id="cash_on_delivery"
                    value="cash_on_delivery"
                    class="hidden"
                  />
                  <label for="cash_on_delivery">
                    <div
                      class="m-3 border dark:border-gray-600 p-4 rounded-lg"
                      :class="{
                        'border-4': payment_type == 'cash_on_delivery',
                        'border-blue-400': payment_type == 'cash_on_delivery',
                        'dark:border-blue-600':
                          payment_type == 'cash_on_delivery',
                        'bg-blue-600': payment_type == 'cash_on_delivery',
                        'bg-opacity-20': payment_type == 'cash_on_delivery',
                      }"
                    >
                      <div class="w-full flex">
                        <img
                          class="w-28 mx-auto"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG1T7vThrBBncN86DCcjOHBlx6SPOdEBSnI8bPUKWsbZfaoEbtuo799t24MYM_BwsvyGQ&usqp=CAU"
                          alt="Cash on Delivery"
                        />
                      </div>
                      <div>
                        <h2 class="font-semibold text-lg">Cash on Delivery</h2>
                      </div>
                    </div>
                  </label>
                </div>
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

            <div class="my-4">
              <button
                type="submit" style="width: 100%;"
                class="text-white bg-blue-700 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-1 md:mr-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                ORDER PLACE
              </button>
            </div>
          </form>
          <!-- {{ cart_item_ids }} -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { onMounted } from "vue";
  import { mapActions, mapGetters, mapState } from "vuex";
  
  export default {
    data() {
      return {
        showalamats : false,
        showdev: false,
        showAddAddress: null,
  
        addAddress: {
          id: null,
          address: null,
          postal_code: null,
          country: null,
          state: null,
          city: null,
          phone: null,
        },
        // form data
        shipping_address_id: null,
        billing_address_id: null,
        delivery_type: "",
        payment_type: "",
        // cart_item_ids: [],
        transactionId: null,
        receipt: null,
      };
    },
    computed: {
      ...mapState("keranjang", ["keranjang"]),
      ...mapGetters("keranjang", ["getKeranjang"]),
      ...mapState("checkout", [
        "address",
        "countries",
        "states",
        "cities",
        "cart_item_ids",
      ]),
    },
    methods: {
      ...mapActions("checkout", ["fectdeleteaddres"]),
      ...mapActions("checkout", [
        "fetchAddress",
        "fetchAllCountries",
        "fetchAllStates",
        "fetchAllCities",
        "fetch_cart_item_ids",
        "order",
        "addalamat",
      ]),
  
      tambah() {
        this.addalamat(this.addAddress);
      },
      hapus(params){
        this.fectdeleteaddres(params);
      },
      showalamat(){
        this.showalamats = true 
      },
      hidealamat(){
        this.showalamats = false 
      },
      show() {
        this.showdev = true;
      },
      tutupshow() {
        this.showdev = false;
      },
      totalHarga() {
      this.total = this.getKeranjang.reduce((acc, product) => {
        return acc + parseFloat(product.regular_price * product.qty );
      }, 0);

      return this.total.toFixed(2);
    },
      orderadd() {
        this.order({
          shipping_address_id: this.shipping_address_id,
          billing_address_id: this.billing_address_id,
          delivery_type: this.delivery_type,
          payment_type: this.payment_type,
          cart_item_ids: this.cart_item_ids,
          transactionId: this.transactionId,
          receipt: this.receipt,
        });
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
      this.fetchAddress();
      this.fetchAllCountries();
      this.fetch_cart_item_ids();
    },
    setup(props, context) {
      onMounted(() => {
        try {
          context.emit("id-menu", 0);
        } catch (error) {
          console.log(error);
        }
      });
    },
  };
  </script>
  