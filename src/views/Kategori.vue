<template>
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16" style="margin-top: 30px;">
        <br />
    <center>
      <div class="container">
        <b style="float: left; padding-left: 30px">Popular Categories</b>
        <router-link to="/kategori">
          <a style="float: right; padding-right: 30px">
            <b>View All Category &nbsp; </b
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
              v-for="kategori in getKategori.data.slice(0, 8)"
              :key="kategori.id" class="px-4 flex-shrink-0" data-slider-target="image"
            >

              <a
                href="#"
                class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <img
                  class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                  src="../assets/img/kategorii.png"
                  alt=""
                  style="width: 180px; border-radius: 10px"
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
      <span class="font-bold text-4xl">All Category</span>
    </div>
    <div class="grid grid-cols-4 gap-3 mt-5">

    <div  v-for="kategori in getKategori.data.slice(0,8)" :key="kategori.id">
      <router-link :to="{ name: 'FilterCategory', params: { slug: kategori.slug } }">

    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row 
    md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="../assets/img/kategorii.png" style="width: 150px;" alt="">
        <div class="flex flex-col justify-between p-4 leading-normal">
          <div class="mt-4">
                            <h3 class="text-black-500 text-lg tracking-widest title-font mb-1">{{ kategori.name }}</h3>

                        </div>
        </div>
    </a>

</router-link>
    </div>
    </div>
    </div>
   </template>
      
      <script>
      
      import { mapGetters, mapActions } from 'vuex'; 
      
      export default{
          computed: {
              ...mapGetters('kategori', ['getKategori']),
              ...mapGetters('product', ['getProduct'])
          },
          methods: {
              ...mapActions('kategori', ['fetchKategori']),
              ...mapActions('product', ['fetchProduct']),
              ...mapActions("keranjang", ["fetchKeranjang"]),
          },
          beforeMount() {
              this.fetchKategori();
              this.fetchKeranjang();
          },
          mounted() {
            this.fetchProduct()
          },
          created() {
        this.fetchKategori()
    }
      }
      </script>