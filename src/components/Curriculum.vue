<template>
  <div class="container mx-auto px-6 py-12 bg-white">
    <!-- Header Section -->
    <div class="text-center mb-10">
      <h1 class="text-4xl font-extrabold text-gray-900">Explore Curriculum</h1>
      <p class="text-sm text-gray-500 mt-2">
        100% Remote Learning, Industry Mentorship, Project-Based Learning
      </p>
    </div>

    <!-- Plan Selection Buttons -->
    <div class="flex justify-center space-x-3 mb-10">
      <button
        class="px-5 py-2 text-sm font-semibold border border-gray-300 text-gray-800 rounded-md hover:bg-gray-200 transition"
        :class="{ 'bg-gray-900 text-white': selectedPlan === 'monthly' }"
        @click="selectedPlan = 'monthly'"
      >
        Monthly Plan
      </button>
      <button
        class="px-5 py-2 text-sm font-semibold border border-gray-300 text-gray-800 rounded-md hover:bg-gray-200 transition"
        :class="{ 'bg-gray-900 text-white': selectedPlan === 'annual' }"
        @click="selectedPlan = 'annual'"
      >
        Annual Plan
      </button>
    </div>

    <!-- Curriculum Content Section -->
    <div class="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto space-y-10 md:space-y-0">
      <!-- Curriculum Image (Left Side) -->
      <div class="w-full md:w-1/2 flex justify-center">
        <div class="relative w-full max-w-md">
          <img src="@/assets/images/curriculam-1.webp" alt="Curriculum" class="rounded-lg shadow-lg w-full object-cover">
        </div>
      </div>

      <!-- Curriculum Information (Right Side) -->
      <div class="w-full md:w-1/2">
        <transition name="fade" mode="out-in">
          <!-- Monthly Plan Content -->
          <div v-if="selectedPlan === 'monthly'" key="monthly">
            <div class="mb-6">
              <h2 class="text-lg font-bold text-gray-900 border-l-4 border-gray-900 pl-4">Accelerated Learning</h2>
              <p class="text-gray-600 text-sm mt-1 pl-4">Fast-Tracked and Affordable Remote Education</p>
            </div>

            <div class="mb-6">
              <h2 class="text-lg font-bold text-gray-900 border-l-4 border-gray-900 pl-4">Business Education</h2>
              <p class="text-gray-600 text-sm mt-1 pl-4">Expert-Led Business Courses</p>
            </div>

            <div class="mb-6">
              <h2 class="text-lg font-bold text-gray-900 border-l-4 border-gray-900 pl-4">Entrepreneurship Focus</h2>
              <p class="text-gray-600 text-sm mt-1 pl-4">Hands-on Entrepreneurship Training</p>
            </div>
          </div>

          <!-- Annual Plan Content -->
          <div v-else key="annual">
            <div class="mb-6">
              <h2 class="text-lg font-bold text-gray-900 border-l-4 border-gray-900 pl-4">Comprehensive Business Training</h2>
              <p class="text-gray-600 text-sm mt-1 pl-4">Gain In-Depth Knowledge in Finance, Marketing & Leadership</p>
            </div>

            <div class="mb-6">
              <h2 class="text-lg font-bold text-gray-900 border-l-4 border-gray-900 pl-4">Entrepreneurship Excellence</h2>
              <p class="text-gray-600 text-sm mt-1 pl-4">From Ideation to Scaling a Profitable Startup</p>
            </div>

            <div class="mb-6">
              <h2 class="text-lg font-bold text-gray-900 border-l-4 border-gray-900 pl-4">Technology Mastery</h2>
              <p class="text-gray-600 text-sm mt-1 pl-4">Learn AI, Full-Stack Development, and Blockchain Technologies</p>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Curriculum",
  data() {
    return {
      selectedPlan: "monthly", // Default plan selection
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}

/* Smooth Fade Animation */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
