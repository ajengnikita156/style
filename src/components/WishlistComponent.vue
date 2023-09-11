<template>
    <router-link to="/keranjang" class="relative inline-flex items-center mr-4 px-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round"
               d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
    
            <div
                class="absolute inline-flex items-center justify-center mr-4 w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                3
            </div>
        </router-link>
    </template>
    
    <script>
    import { mapGetters, mapActions } from 'vuex';
    
        export default {
            name: 'WishlistComponent',
        }
    </script>