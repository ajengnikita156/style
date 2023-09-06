<template>
    <center>

    <div class="m-10 max-w-sm" style="margin-top: 120px;">
  <div class="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
    <div class="relative mx-auto w-36 rounded-full">
      <img class="mx-auto h-auto w-full rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5sbcmkeP9sVulyi_8lhSnIrs7nji0F-YfRQ&usqp=CAU" alt="" />
    </div>
    <h1 class="my-1 text-center text-xl font-bold leading-8 text-black">{{ userData.name}}</h1>
    <h3 class="font-lg text-semibold text-center leading-6 text-black">{{ userData.email }}</h3>
    <ul class="mt-3 divide-y rounded bg-blue-100 py-2 px-3 text-black-600 shadow-sm hover:text-black hover:shadow">
      <li class="flex items-center py-3 text-sm">
        <span>Number Phone</span>
        <span class="ml-auto"><span class="rounded-full bg-blue-300 py-1 px-2 text-xs font-medium text-black-700">{{ address.phone }}</span></span>
      </li>
    </ul>
    <ul class="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-black-600 shadow-sm hover:text-black hover:shadow">
      <li class="flex items-center py-3 text-sm">
        <span>Address</span>
        <span class="ml-auto"><span class="rounded-full bg-blue-300 py-1 px-2 text-xs font-medium text-black-700">{{ address.address }}</span></span>
      </li>
    </ul>
    <ul class="mt-3 divide-y rounded bg-blue-100 py-2 px-3 text-black-600 shadow-sm hover:text-black hover:shadow">
      <li class="flex items-center py-3 text-sm">
        <span>City</span>
        <span class="ml-auto"><span class="rounded-full bg-blue-300 py-1 px-2 text-xs font-medium text-black-700">{{ address.city }}</span></span>
      </li>
    </ul>
    <ul class="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-black-600 shadow-sm hover:text-black hover:shadow">
      <li class="flex items-center py-3 text-sm">
        <span>Province</span>
        <span class="ml-auto"><span class="rounded-full bg-blue-300 py-1 px-2 text-xs font-medium text-black-700">{{ address.state }}</span></span>
      </li>
    </ul>
    <ul class="mt-3 divide-y rounded bg-blue-100 py-2 px-3 text-black-600 shadow-sm hover:text-black hover:shadow">
      <li class="flex items-center py-3 text-sm">
        <span>Country</span>
        <span class="ml-auto"><span class="rounded-full bg-blue-300 py-1 px-2 text-xs font-medium text-black-700">{{ address.country }}</span></span>
      </li>
    </ul>
  </div>
</div>
</center>
</template>

<script>
    import { mapGetters, mapState, mapActions } from 'vuex';

    export default {
        data(){
            return{
                uData : [],
            }
        },
        computed: {
            ...mapState('users', ['userData']),
            ...mapState('keranjang', ['address']),
            ...mapGetters('keranjang', ['getAddress'])
        },
        methods: {
            ...mapActions('users', ['fetchUser']),
            ...mapActions('keranjang', ['fetchAddress'])
        },
        created() {
            this.uData = this.fetchUser();
            this.fetchAddress();
        },
        
    }
</script>