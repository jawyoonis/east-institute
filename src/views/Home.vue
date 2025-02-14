<template>
  <main class="relative min-h-screen flex flex-col justify-between bg-white font-tech pt-24">
    <!-- Hero Section -->
    <section class="flex flex-col items-center justify-center text-center flex-grow px-4 sm:px-6">
      <h1 class="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
        Bridging the Industry-Education Gap
      </h1>
      <p class="mt-4 text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl">
        Practical education in technology, business, and innovation to help you succeed.
      </p>
      <router-link to="/curriculum">
        <button class="mt-6 px-4 py-2 bg-black text-white rounded-md shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out">
          Explore Curriculum
        </button>
      </router-link>
    </section>

    <!-- Category Section with Clickable Images -->
    <section class="mt-12 mb-16 px-6 sm:px-12 flex flex-col items-center">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        <div v-for="(category, index) in categories" :key="category.title" class="flex flex-col items-center">
          <!-- Clickable Image Navigating to Respective Page -->
          <router-link :to="category.route">
            <div class="relative w-64 h-72 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300">
              <img :src="category.image" :alt="category.title" class="w-full h-full object-cover">
              <div class="absolute bottom-0 w-full bg-black bg-opacity-50 p-3 text-white text-lg font-bold text-center">
                {{ category.title }}
              </div>
            </div>
          </router-link>

          <!-- Styled and Animated Text -->
          <div class="mt-4 text-center text-gray-800 text-lg font-medium tracking-wide">
            <p v-for="text in category.description" :key="text" class="mb-2">
              {{ text }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </main>
</template>

<script>
import technology from '@/assets/images/technology.jpg';
import business from '@/assets/images/business.jpg';
import entrepreneurship from '@/assets/images/entrepreneurship.jpg';

export default {
  name: 'Home',
  data() {
    return {
      categories: [
        {
          title: "TECHNOLOGY",
          image: technology,
          route: "/technology",
          description: [
            "Computer Science",
            "Software Development",
            "Machine Learning",
            "Data Science"
          ]
        },
        {
          title: "BUSINESS",
          image: business,
          route: "/business-info",
          description: [
            "Accounting & Finance",
            "Marketing & Sales",
            "Leadership & Management",
            "Strategic Planning"
          ]
        },
        {
          title: "ENTREPRENEURSHIP",
          image: entrepreneurship,
          route: "/entrepreneurship",
          description: [
            "Startup Development",
            "Product Innovation",
            "Business Strategy",
            "Scaling & Growth"
          ]
        }
      ]
    };
  }
}
</script>

<style scoped>
/* Import modern font */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

.font-tech {
  font-family: 'Inter', sans-serif;
}
</style>
