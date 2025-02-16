<template>
  <footer class="bg-gray-800 text-white py-4">
    <div class="container mx-auto text-center">
      <!-- Logo and Institute Name -->
      <div class="flex justify-center items-center space-x-2 mb-2">
        <img src="/favicon.ico" alt="EAST Institute Logo" class="h-12 w-12" />
        <p class="text-lg font-semibold">EAST COLLEGE</p>
      </div>
      <!-- Navigation Links -->
      <div class="mt-2 flex justify-center space-x-4">
        <router-link to="/" class="text-sm hover:text-gray-400">Home</router-link>
        <router-link to="/about" class="text-sm hover:text-gray-400">About</router-link>
        <router-link to="/blog" class="text-sm hover:text-gray-400">Blog</router-link>
        <!-- Removed 'Waitlist', 'Courses', 'Curriculum', 'Contact', and 'Admin Dashboard' links -->
      </div>
      <!-- Social Media Icons -->
      <div class="mt-2 flex justify-center space-x-3">
        <a href="https://www.facebook.com" target="_blank" class="hover:text-gray-400">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.twitter.com" target="_blank" class="hover:text-gray-400">
          <i class="fab fa-twitter"></i>
        </a>
        <!-- Add other social media links as needed -->
      </div>
      <!-- Copyright Notice -->
      <div class="mt-2 text-sm text-gray-400">
        &copy; 2025 EAST COLLEGE. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>
