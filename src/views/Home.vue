<template>
    <main class="relative min-h-screen flex flex-col justify-between bg-gradient-to-b from-blue-100 to-white">
      <!-- Hero Section -->
      <section class="flex flex-col items-center justify-center text-center flex-grow px-4 sm:px-6">
        <h1 class="text-3xl sm:text-4xl font-bold">Coming Soon</h1>
        <p class="mt-2 text-sm sm:text-base">
          Building Africa's Future Through STEM and Business Education!
        </p>
        <router-link to="/waitlist">
          <button class="mt-5 px-4 py-2 sm:px-5 sm:py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
            Join The Waitlist
          </button>
        </router-link>
      </section>
  
      <!-- Footer -->
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
  