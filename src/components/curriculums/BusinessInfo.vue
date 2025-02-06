<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-12">
    <!-- Page Title -->
    <h1 class="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-6 animate-fade-in">
      Business Program: Learn, Innovate, Lead
    </h1>

    <!-- Description -->
    <p class="text-center text-gray-700 max-w-3xl text-sm sm:text-lg animate-fade-in">
      Gain expertise in business strategy, finance, and marketing through AI-driven learning, live simulations,
      and expert mentorship. Develop the skills to lead and innovate in a fast-changing digital economy.
    </p>

    <!-- Course Categories -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl">
      <!-- Business Strategy -->
      <div class="business-card bg-gradient-to-r from-blue-500 to-blue-600">
        <div class="icon">
          <i class="fas fa-chart-line"></i>
        </div>
        <h2>Business Strategy</h2>
        <p>Make data-driven decisions, manage operations, and lead organizations in a competitive market.</p>
      </div>

      <!-- Finance and Accounting -->
      <div class="business-card bg-gradient-to-r from-green-500 to-green-600">
        <div class="icon">
          <i class="fas fa-coins"></i>
        </div>
        <h2>Finance and Investment</h2>
        <p>Master financial modeling, corporate finance, and investment strategies for modern financial systems.</p>
      </div>

      <!-- Marketing and Branding -->
      <div class="business-card bg-gradient-to-r from-red-500 to-red-600">
        <div class="icon">
          <i class="fas fa-bullhorn"></i>
        </div>
        <h2>Marketing and Brand Growth</h2>
        <p>Build campaigns using digital analytics, social media, and AI-driven customer insights.</p>
      </div>

      <!-- Entrepreneurship -->
      <div class="business-card bg-gradient-to-r from-purple-500 to-purple-600">
        <div class="icon">
          <i class="fas fa-lightbulb"></i>
        </div>
        <h2>Entrepreneurship and Innovation</h2>
        <p>Learn to launch and scale startups, secure funding, and create digital-first business models.</p>
      </div>

      <!-- Business Technology -->
      <div class="business-card bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div class="icon">
          <i class="fas fa-robot"></i>
        </div>
        <h2>Business Technology</h2>
        <p>Explore how AI, automation, and data analytics transform industries and drive growth.</p>
      </div>

      <!-- Business Law and Ethics -->
      <div class="business-card bg-gradient-to-r from-gray-700 to-gray-800">
        <div class="icon">
          <i class="fas fa-balance-scale"></i>
        </div>
        <h2>Corporate Law and Ethics</h2>
        <p>Understand corporate governance, business regulations, and ethical leadership in a global economy.</p>
      </div>
    </div>

    <!-- CTA Button -->
    <router-link to="/apply">
      <button class="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition animate-bounce">
        Apply Now
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BusinessInfo",
};
</script>

<style scoped>
/* Fade-in animation */
@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0px); }
}
.animate-fade-in {
  animation: fadeIn 1s ease-in-out forwards;
}

/* Slide-up animation */
@keyframes slideUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0px); }
}

/* Floating animation */
@keyframes floating {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
}

/* Animated business cards */
.business-card {
  @apply p-6 rounded-lg shadow-lg text-white transform transition-all duration-300 ease-in-out;
  animation: slideUp 1s ease-in-out, floating 3s ease-in-out infinite;
}
.business-card h2 {
  @apply text-xl font-semibold mb-2;
}
.business-card p {
  @apply text-sm;
}
.business-card:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}

/* Icons */
.icon {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 0.75rem;
}
</style>
