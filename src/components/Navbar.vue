<template>
    <nav class="bg-white shadow-md h-25">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 h-full flex items-center justify-between">
        <!-- Logo & Institute Name -->
        <div class="flex items-center space-x-4">
          <img src="@/assets/images/logo1.png" alt="EAST Institute Logo" class="rounded-full h-24 w-24" />
          <h1 class="text-3xl font-extrabold text-gray-900">EAST INSTITUTE</h1>
        </div>
  
        <!-- Navigation Links -->
        <div class="hidden sm:flex sm:space-x-6 items-center">
          <router-link
            v-for="link in navigation"
            :key="link.name"
            :to="link.path"
            class="text-blue-700 text-sm font-semibold hover:text-blue-900 transition duration-300"
          >
            {{ link.name }}
          </router-link>
          <router-link
            to="/waitlist"
            class="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 text-sm font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Join Waitlist
          </router-link>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
    data() {
      return {
        navigation: [
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
          { name: 'Blog', path: '/blog' },
          { name: 'Contact', path: '/contact' },
          {name: 'Curriculum', path: '/curriculum'},
          {name:'admindashboard', path: '/admindashboard'},
        ],
      };
    },
  };
  </script>
  