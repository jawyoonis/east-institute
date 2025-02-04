<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 py-12">
    <!-- Page Title -->
    <h1 class="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-6 animate-fade-in">
      Master Cutting-Edge Technologies
    </h1>

    <!-- Description -->
    <p class="text-center text-gray-700 max-w-3xl text-sm sm:text-lg animate-fade-in">
      Gain hands-on experience with the latest innovations in artificial intelligence, cloud computing, cybersecurity,
      and full-stack development. Learn from industry experts and work on real-world projects to build your expertise.
    </p>

    <!-- Course Categories -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl">
      <!-- Artificial Intelligence & Machine Learning -->
      <div class="tech-card bg-gradient-to-r from-purple-500 to-indigo-600">
        <div class="icon">
          <i class="fas fa-brain"></i>
        </div>
        <h2>Artificial Intelligence & Machine Learning</h2>
        <p>Build intelligent systems using deep learning, neural networks, and AI-driven automation.</p>
      </div>

      <!-- Data Science & Big Data -->
      <div class="tech-card bg-gradient-to-r from-blue-500 to-cyan-600">
        <div class="icon">
          <i class="fas fa-database"></i>
        </div>
        <h2>Data Science & Big Data Analytics</h2>
        <p>Learn data processing, predictive analytics, and machine learning applications for solving real-world problems.</p>
      </div>

      <!-- Cybersecurity & Ethical Hacking -->
      <div class="tech-card bg-gradient-to-r from-red-500 to-orange-600">
        <div class="icon">
          <i class="fas fa-user-shield"></i>
        </div>
        <h2>Cybersecurity & Ethical Hacking</h2>
        <p>Master network security, penetration testing, and ethical hacking to protect digital systems from cyber threats.</p>
      </div>

      <!-- Cloud Computing & DevOps -->
      <div class="tech-card bg-gradient-to-r from-green-500 to-teal-600">
        <div class="icon">
          <i class="fas fa-cloud"></i>
        </div>
        <h2>Cloud Computing & DevOps</h2>
        <p>Gain expertise in AWS, Google Cloud, and Azure. Learn how to deploy, manage, and scale cloud-based applications.</p>
      </div>

      <!-- Full-Stack Web Development -->
      <div class="tech-card bg-gradient-to-r from-yellow-500 to-amber-600">
        <div class="icon">
          <i class="fas fa-code"></i>
        </div>
        <h2>Full-Stack Web Development</h2>
        <p>Build responsive and dynamic web applications using modern frameworks such as React, Vue.js, and Node.js.</p>
      </div>

      <!-- Blockchain & Web3 Development -->
      <div class="tech-card bg-gradient-to-r from-gray-700 to-gray-800">
        <div class="icon">
          <i class="fas fa-link"></i>
        </div>
        <h2>Blockchain & Web3 Development</h2>
        <p>Explore smart contracts, decentralized applications (DApps), and blockchain-based business models.</p>
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
  name: "Technology",
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

/* Animated technology cards */
.tech-card {
  @apply p-6 rounded-lg shadow-lg text-white transform transition-all duration-300 ease-in-out;
  animation: slideUp 1s ease-in-out, floating 3s ease-in-out infinite;
}
.tech-card h2 {
  @apply text-xl font-semibold mb-2;
}
.tech-card p {
  @apply text-sm;
}
.tech-card:hover {
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
