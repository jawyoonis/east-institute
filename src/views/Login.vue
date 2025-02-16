<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 px-4">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <!-- Header -->
      <h2 class="text-3xl font-bold text-gray-900 text-center">Welcome Back</h2>
      <p class="text-gray-500 text-center mt-2">Log in to your account</p>

      <!-- Login Form -->
      <form @submit.prevent="handleLogin" class="mt-6">
        <!-- Email Field -->
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

        <!-- Password Field -->
        <div class="mb-4">
          <label class="block text-gray-700 font-semibold mb-1">Password</label>
          <input
            type="password"
            v-model="password"
            required
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none transition"
            placeholder="Enter your password"
          />
        </div>

        <!-- Forgot Password -->
        <div class="text-right mb-4">
          <router-link to="/forgot-password" class="text-blue-600 text-sm font-semibold hover:underline">
            Forgot Password?
          </router-link>
        </div>

        <!-- Login Button -->
        <button
          type="submit"
          class="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center"
          :disabled="loading"
        >
          <svg v-if="loading" class="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="white" stroke-width="4"></circle>
            <path class="opacity-75" fill="white" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
          Login
        </button>
      </form>

      <!-- Sign Up Link -->
      <p class="mt-4 text-center text-gray-600">
        Don't have an account?
        <router-link to="/signup" class="text-blue-600 font-semibold hover:underline">Sign Up</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      loading: false, // Added loading state
    };
  },
  methods: {
    handleLogin() {
      this.loading = true;
      setTimeout(() => {
        if (this.email === "test@example.com" && this.password === "password") {
          localStorage.setItem("isLoggedIn", "true");
          this.$router.push("/");
        } else {
          alert("Invalid email or password.");
        }
        this.loading = false;
      }, 1500); // Simulated delay for better UX
    },
  },
};
</script>

