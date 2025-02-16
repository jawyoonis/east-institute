<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 px-4">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <!-- Header -->
      <h2 class="text-3xl font-bold text-gray-900 text-center">Create an Account</h2>
      <p class="text-gray-500 text-center mt-2">Join us and start learning today</p>

      <!-- Signup Form -->
      <form @submit.prevent="handleSignup" class="mt-6">
        <!-- Full Name -->
        <div class="mb-4">
          <label class="block text-gray-700 font-semibold mb-1">Full Name</label>
          <input
            type="text"
            v-model="fullName"
            required
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none transition"
            placeholder="Enter your full name"
          />
        </div>

        <!-- Email -->
        <div class="mb-4">
          <label class="block text-gray-700 font-semibold mb-1">Email Address</label>
          <input
            type="email"
            v-model="email"
            required
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none transition"
            placeholder="Enter your email"
          />
        </div>

        <!-- Password -->
        <div class="mb-4">
          <label class="block text-gray-700 font-semibold mb-1">Password</label>
          <input
            type="password"
            v-model="password"
            required
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none transition"
            placeholder="Create a strong password"
          />
        </div>

        <!-- Signup Button -->
        <button
          type="submit"
          class="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center"
          :disabled="loading"
        >
          <svg v-if="loading" class="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="white" stroke-width="4"></circle>
            <path class="opacity-75" fill="white" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
          Sign Up
        </button>
      </form>

      <!-- Login Link -->
      <p class="mt-4 text-center text-gray-600">
        Already have an account?
        <router-link to="/login" class="text-blue-600 font-semibold hover:underline">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullName: "",
      email: "",
      password: "",
      loading: false, // Added loading state
    };
  },
  methods: {
    handleSignup() {
      this.loading = true;
      setTimeout(() => {
        alert(`Account created for ${this.fullName}! You can now log in.`);
        this.$router.push("/login");
        this.loading = false;
      }, 1500); // Simulated delay for better UX
    },
  },
};
</script>
