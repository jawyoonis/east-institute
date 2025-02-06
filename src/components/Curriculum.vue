<template>
  <div class="container mx-auto px-6 py-12 bg-white">
    <!-- Header Section -->
    <div class="text-center mb-12">
      <h1 class="text-5xl font-extrabold text-gray-900">Explore Curriculum</h1>
      <p class="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
        100% Remote Learning, Industry Mentorship, Project-Based Learning
      </p>

      <!-- Plan Selection Buttons -->
      <div class="mt-6 flex justify-center space-x-4">
        <button
          class="px-6 py-2 border border-gray-400 text-gray-900 rounded-md hover:bg-gray-100 transition font-medium"
          :class="{ 'bg-black text-white': selectedPlan === 'monthly' }"
          @click="selectedPlan = 'monthly'"
        >
          Monthly Plan
        </button>
        <button
          class="px-6 py-2 border border-gray-400 text-gray-900 rounded-md hover:bg-gray-100 transition font-medium"
          :class="{ 'bg-black text-white': selectedPlan === 'annual' }"
          @click="selectedPlan = 'annual'"
        >
          Annual Plan
        </button>
      </div>
    </div>

    <!-- Curriculum Content Section -->
    <div class="flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-12 max-w-5xl mx-auto">
      <!-- Curriculum Image -->
      <div class="w-full md:w-1/3 flex justify-center">
        <img src="@/assets/images/curriculam-1.webp" alt="Curriculum" class="rounded-lg shadow-lg w-full max-w-md object-cover">
      </div>

      <!-- Curriculum Information -->
      <div class="w-full md:w-2/3">
        <transition name="fade" mode="out-in">
          <div v-if="selectedPlan === 'monthly'" key="monthly">
            <div class="border-l-4 border-gray-900 pl-6">
              <h2 class="text-2xl font-bold text-gray-900 mb-2">Monthly Plan</h2>
              <p class="text-gray-600">Pay as you go with flexible learning options.</p>
              <ul class="mt-4 space-y-3 text-gray-700 list-disc list-inside">
                <li>Full access to all courses</li>
                <li>Live mentorship sessions</li>
                <li>Career support & guidance</li>
                <li>Community networking</li>
              </ul>
              <p class="mt-6 text-lg font-semibold text-red-600">$49/month</p>
            </div>
          </div>

          <div v-else key="annual">
            <div class="border-l-4 border-gray-900 pl-6">
              <h2 class="text-2xl font-bold text-gray-900 mb-2">Annual Plan</h2>
              <p class="text-gray-600">Commit for a year and enjoy premium benefits.</p>
              <ul class="mt-4 space-y-3 text-gray-700 list-disc list-inside">
                <li>Everything included in the Monthly Plan</li>
                <li>Exclusive one-on-one mentorship</li>
                <li>Personalized career guidance</li>
                <li>Free access to workshops & masterclasses</li>
              </ul>
              <p class="mt-6 text-lg font-semibold text-red-600">$499/year (Save 15%)</p>
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
