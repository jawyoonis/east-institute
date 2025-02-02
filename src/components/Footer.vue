<template>
    <footer class="bg-gray-800 text-white py-6">
      <div class="container mx-auto text-center">
        <p class="text-lg font-semibold">EAST INSTITUTE</p>
        <div class="mt-4 flex justify-center space-x-6">
          <router-link to="/" class="hover:text-gray-400">Home</router-link>
          <router-link to="/about" class="hover:text-gray-400">About</router-link>
          <router-link to="/blog" class="hover:text-gray-400">Blog</router-link>
          <router-link to="/waitlist" class="hover:text-gray-400">Waitlist</router-link>
          <router-link to="/courses" class="hover:text-gray-400">Courses</router-link>
          <router-link to="/curriculum" class="hover:text-gray-400">Curriculum</router-link>
          <router-link to="/contact" class="hover:text-gray-400">Contact</router-link>
          <router-link to="/AdminDashboard" class="hover:text-gray-400">Admin Dashboard</router-link>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
  };
  </script>
  