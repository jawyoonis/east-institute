<template>
  <nav class="bg-blue-100 border-b shadow-md">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 h-20 flex justify-between items-center">
      <!-- Logo & Institute Name -->
      <div class="flex items-center space-x-4">
        <img src="/favicon.ico" alt="EAST College Logo" class="h-12 w-12" />
        <h1 class="text-lg font-extrabold text-gray-900 whitespace-nowrap">EAST COLLEGE</h1>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden sm:flex items-center space-x-6">
        <router-link
          v-for="link in navigation"
          :key="link.name"
          :to="link.path"
          class="text-xs text-black font-semibold hover:text-gray-700 transition duration-300"
        >
          {{ link.name }}
        </router-link>

        <!-- Login Button -->
        <router-link
          to="/login"
          class="bg-blue-600 text-white px-3 py-1 text-xs font-bold rounded-md shadow-md hover:bg-blue-700 transition"
        >
          Log In
        </router-link>

        <!-- Contact Us Button -->
        <router-link
          to="/contact"
          class="bg-black text-white px-3 py-1 text-xs font-bold rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
          Contact Us
        </router-link>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="sm:hidden text-gray-900 focus:outline-none">
        ☰
      </button>
    </div>

    <!-- Mobile Dropdown Menu -->
    <div v-if="isMenuOpen" class="sm:hidden bg-white border-t shadow-md">
      <div class="flex flex-col items-center space-y-4 py-4">
        <router-link
          v-for="link in navigation"
          :key="link.name"
          :to="link.path"
          class="text-xs text-black font-semibold hover:text-gray-700 transition duration-300"
          @click="toggleMenu"
        >
          {{ link.name }}
        </router-link>

        <!-- Mobile Login Button -->
        <router-link
          to="/login"
          class="bg-blue-600 text-white px-3 py-1 text-xs font-bold rounded-md shadow-md hover:bg-blue-700 transition"
          @click="toggleMenu"
        >
          Log In
        </router-link>

        <!-- Mobile Contact Us Button -->
        <router-link
          to="/contact"
          class="bg-black text-white px-3 py-1 text-xs font-bold rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
          @click="toggleMenu"
        >
          Contact Us
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
      isMenuOpen: false, // Controls mobile menu
      navigation: [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Media', path: '/media' },
        { name: 'Curriculum', path: '/curriculum' },
        { name: 'Admin Dashboard', path: '/admin-dashboard' },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Toggle menu on mobile
    },
  },
};
</script>
