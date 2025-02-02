<template>
    <main class="relative min-h-screen flex flex-col justify-between bg-gradient-to-b from-blue-100 to-white">
      <!-- Hero Section -->
      <section class="flex flex-col items-center justify-center text-center flex-grow px-6">
        <h1 class="text-5xl font-bold">Coming Soon</h1>
        <p class="mt-2 text-lg">
          Building Africa's Future Through STEM and Business Education!
        </p>
        <button class="mt-5 px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition">
        <router-link to="/waitlist">Join The Waitlist</router-link>
        </button>
      </section>
      <Footer />
    </main>
  </template>
  
  <script>
  import Footer from '@/components/Footer.vue';
  export default {
    name: 'Home',
    components: {
    Footer,
  },
  };
  </script>
  