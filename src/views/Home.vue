<template>
  <main class="relative min-h-screen flex flex-col justify-between bg-gradient-to-b from-blue-100 to-white font-tech">
    <!-- Hero Section -->
    <section class="flex flex-col items-center justify-center text-center flex-grow px-4 sm:px-6 mt-20">
      <h1 v-animate-onscroll="'animated fadeInDown'" class="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
        Bridging the Industry-Education Gap
      </h1>
      <p v-animate-onscroll="'animated fadeInUp'" class="mt-3 text-sm sm:text-base text-gray-700 max-w-2xl">
        Practical education in technology, business, and innovation to help you succeed.
      </p>
      <router-link to="/curriculum">
        <button v-animate-onscroll="'animated pulse'"
          class="mt-6 px-5 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-md shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out">
          Explore Curriculum
        </button>
      </router-link>
    </section>

    <!-- Category Section with Clickable Images -->
    <section class="mt-16 mb-24 px-6 sm:px-12 flex flex-col items-center">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl">
        <div v-for="(category, index) in categories" :key="category.title" class="flex flex-col items-center">
          <!-- Clickable Image Navigating to Respective Page -->
          <router-link :to="category.route">
            <div
              class="relative w-64 h-72 rounded-xl overflow-hidden shadow-lg animate-floating cursor-pointer hover:scale-105 transition-transform duration-300"
              :class="index % 2 === 0 ? 'animate-delay-1' : 'animate-delay-2'"
            >
              <img :src="category.image" :alt="category.title" class="w-full h-full object-cover">
              <div class="absolute bottom-0 w-full bg-black bg-opacity-50 p-2 text-white text-sm sm:text-base font-bold text-center">
                {{ category.title }}
              </div>
            </div>
          </router-link>

          <!-- Styled and Animated Text -->
          <div class="mt-3 text-center text-gray-800 text-sm sm:text-base font-medium tracking-wide animate-slide-up">
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
import technology from '../assets/images/technology.jpg';
import business from '../assets/images/business.jpg';
import entrepreneurship from '../assets/images/entrepreneurship.jpg';

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
};
</script>

<style scoped>
/* Import modern font */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

.font-tech {
  font-family: 'Inter', sans-serif;
}

/* Floating animation for images */
@keyframes floating {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
}
.animate-floating {
  animation: floating 3s ease-in-out infinite;
}
.animate-delay-1 { animation-delay: 0s; }
.animate-delay-2 { animation-delay: 1.5s; }

/* Slide Up Animation for Text */
@keyframes slideUp {
  0% { opacity: 0; transform: translateY(8px); }
  100% { opacity: 1; transform: translateY(0px); }
}
.animate-slide-up {
  animation: slideUp 1s ease-out forwards;
  opacity: 0;
}
</style>
