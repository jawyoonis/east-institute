<template>
  <footer class="bg-gray-800 text-white py-8">
    <div class="container mx-auto text-center">
      <!-- Logo and Institute Name -->
      <div class="flex justify-center items-center space-x-4 mb-4">
        <img src="@/assets/images/logo1.png" alt="EAST Institute Logo" class="h-16 w-16 animate-fade-in" />
        <p class="text-2xl font-semibold animate-fade-in">EAST INSTITUTE</p>
      </div>
      <!-- Navigation Links -->
      <div class="mt-4 flex justify-center space-x-6 animate-fade-in">
        <router-link to="/" class="hover:text-gray-400">Home</router-link>
        <router-link to="/about" class="hover:text-gray-400">About</router-link>
        <router-link to="/blog" class="hover:text-gray-400">Blog</router-link>
        <router-link to="/waitlist" class="hover:text-gray-400">Waitlist</router-link>
        <router-link to="/courses" class="hover:text-gray-400">Courses</router-link>
        <router-link to="/curriculum" class="hover:text-gray-400">Curriculum</router-link>
        <router-link to="/contact" class="hover:text-gray-400">Contact</router-link>
        <router-link to="/AdminDashboard" class="hover:text-gray-400">Admin Dashboard</router-link>
      </div>
      <!-- Social Media Icons -->
      <div class="mt-4 flex justify-center space-x-4 animate-fade-in">
        <a href="https://www.facebook.com" target="_blank" class="hover:text-gray-400">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.twitter.com" target="_blank" class="hover:text-gray-400">
          <i class="fab fa-twitter"></i>
        </a>
        <!-- Add other social media links as needed -->
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>
