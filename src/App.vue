<template>
  <div id="nav">
    <Navbar />
  </div>
  <router-view />
  <br>
  <Footer> </Footer>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';

import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import 'flowbite/dist/flowbite';


export default {
  components: {
    Navbar,
    Footer
  }
};
</script>