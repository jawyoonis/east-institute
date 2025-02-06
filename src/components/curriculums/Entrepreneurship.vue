<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-12">
    <!-- Page Title -->
    <h1 class="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-6 animate-fade-in">
      Entrepreneurship Program: Build, Innovate, Lead
    </h1>

    <!-- Description -->
    <p class="text-center text-gray-700 max-w-3xl text-sm sm:text-lg animate-fade-in">
      Learn how to launch and scale a successful business using cutting-edge technology, data-driven decision-making,
      and expert mentorship. Develop the skills to build sustainable, innovative, and high-growth startups.
    </p>

    <!-- Program Categories -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl">
      <!-- Startup Development -->
      <div class="entrepreneur-card bg-gradient-to-r from-blue-500 to-blue-600">
        <div class="icon">
          <i class="fas fa-rocket"></i>
        </div>
        <h2>Startup Development</h2>
        <p>Learn the step-by-step process of launching a startup, from ideation to execution, using lean startup methodologies.</p>
      </div>

      <!-- Business Funding -->
      <div class="entrepreneur-card bg-gradient-to-r from-green-500 to-green-600">
        <div class="icon">
          <i class="fas fa-hand-holding-usd"></i>
        </div>
        <h2>Funding and Investment</h2>
        <p>Understand how to secure venture capital, pitch investors, and manage financial growth for your business.</p>
      </div>

      <!-- Digital Business Models -->
      <div class="entrepreneur-card bg-gradient-to-r from-purple-500 to-purple-600">
        <div class="icon">
          <i class="fas fa-network-wired"></i>
        </div>
        <h2>Digital Business Models</h2>
        <p>Explore modern business models powered by technology, including subscription-based services, AI-driven platforms, and e-commerce.</p>
      </div>

      <!-- Innovation and Product Development -->
      <div class="entrepreneur-card bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div class="icon">
          <i class="fas fa-lightbulb"></i>
        </div>
        <h2>Innovation and Product Development</h2>
        <p>Design and develop innovative products using emerging technologies and market-driven strategies.</p>
      </div>

      <!-- Growth Hacking & Marketing -->
      <div class="entrepreneur-card bg-gradient-to-r from-red-500 to-orange-600">
        <div class="icon">
          <i class="fas fa-chart-line"></i>
        </div>
        <h2>Growth Hacking & Marketing</h2>
        <p>Learn data-driven marketing techniques to rapidly scale your business and acquire customers efficiently.</p>
      </div>

      <!-- Business Automation -->
      <div class="entrepreneur-card bg-gradient-to-r from-gray-700 to-gray-800">
        <div class="icon">
          <i class="fas fa-cogs"></i>
        </div>
        <h2>Business Automation</h2>
        <p>Use AI and automation tools to streamline operations, optimize workflows, and improve business efficiency.</p>
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
  name: "Entrepreneurship",
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

/* Animated entrepreneur cards */
.entrepreneur-card {
  @apply p-6 rounded-lg shadow-lg text-white transform transition-all duration-300 ease-in-out;
  animation: slideUp 1s ease-in-out, floating 3s ease-in-out infinite;
}
.entrepreneur-card h2 {
  @apply text-xl font-semibold mb-2;
}
.entrepreneur-card p {
  @apply text-sm;
}
.entrepreneur-card:hover {
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
