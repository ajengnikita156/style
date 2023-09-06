<template>
    <div  style=" margin-top: 60px;">
    
        <div class="header  flex items-center">
            <div class="container mx-auto px-4">
                <div class="header-box flex lg:flex-row flex-col items-center gap-10">
                    <div class="box lg:w-1/2 lg:order-1 order-2 lg:text-left text-center"><br>
                        <h1 class="font-extrabold md:text-6xl sm:text-3xl text-2xl text-slate-900 mb-4">Style.mu  collection</h1>
                      <center><p class="mb-5 text-slate-800 md:text-base sm:text-sm text-xs ">Menjual Berbagai Kebutuhan Style Anda</p></center>
        
                        
                    </div>
                        <img src="../assets/img/banner.avif" class="xl:w-[600px] lg:w-[400px] md:w-[300px] sm:w-[250px] w-[200px] block ml-auto" style="width: 500px; height: 500px; margin-top: 20px;">
                 
                </div>
            </div>
        </div><br><br>
    
     
        </div>
    
        
    </template>

    
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    computed: {
        ...mapGetters('product', ['getProduct'])
    },
    methods: {
        ...mapActions('product', ['fetchProduct']),
        capitalizeFirstLetter(text) {
            return text.charAt(0).toUpperCase() + text.slice(1);
        },
        ...mapActions("keranjang", ["fetchKeranjang"]),
    },
    beforeMount() {
        this.fetchKeranjang();
    },

    mounted() {
        this.fetchProduct()
    }
}
</script>