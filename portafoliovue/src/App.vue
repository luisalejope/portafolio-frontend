<script setup>
import { RouterView, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useLoaderStore } from '@/stores/loader';
import { useUserStore } from '@/stores/user';
import Loader from '@/components/global/Loader.vue';
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue';
import { onBeforeMount, ref, computed } from 'vue';
// ROUTER
const router = useRouter();

// STORES
const loadStore = useLoaderStore();

const { getLoaderStatus } = storeToRefs(loadStore);




</script>

<template>
  <div id="poc-container" class="mb-xl">
    <Nav />
    <RouterView />
    <Loader v-show="getLoaderStatus" />
  </div>
  <Footer />
</template>

<style lang="scss" scoped>
#poc-container {
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1280px;
}
</style>