<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          🚀 Secure Your Early Access
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Be among the first to experience our platform when we launch.
        </p>
      </div>
      <form class="mt-8 space-y-6 bg-white p-8 rounded-lg shadow-lg" @submit.prevent="handleSubmit">
        <div class="space-y-4">
          <div class="relative">
            <label for="first-name" class="sr-only">First Name</label>
            <input
              id="first-name"
              name="firstName"
              type="text"
              autocomplete="given-name"
              required
              v-model="firstName"
              class="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="First Name"
            />
            <span class="absolute inset-y-0 right-3 flex items-center pointer-events-none">👤</span>
          </div>
          <div class="relative">
            <label for="last-name" class="sr-only">Last Name</label>
            <input
              id="last-name"
              name="lastName"
              type="text"
              autocomplete="family-name"
              required
              v-model="lastName"
              class="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Last Name"
            />
            <span class="absolute inset-y-0 right-3 flex items-center pointer-events-none">👤</span>
          </div>
          <div class="relative">
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required
              v-model="email"
              class="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Email address"
            />
            <span class="absolute inset-y-0 right-3 flex items-center pointer-events-none">📧</span>
          </div>
          <div class="relative">
            <label for="course" class="sr-only">Select Course</label>
            <select
              id="course"
              name="course"
              required
              v-model="selectedCourse"
              class="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="" disabled>Select a course</option>
              <option v-for="course in courses" :key="course" :value="course">
                {{ course }}
              </option>
            </select>
            <span class="absolute inset-y-0 right-3 flex items-center pointer-events-none">📘</span>
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Join Waitlist 🎉
          </button>
        </div>
      </form>
      <p v-if="successMessage" class="mt-2 text-center text-sm text-green-600">{{ successMessage }}</p>
      <p v-if="errorMessage" class="mt-2 text-center text-sm text-red-600">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      selectedCourse: '',
      courses: ['Course A', 'Course B', 'Course C'], // List of available courses
      successMessage: '',
      errorMessage: '',
    };
  },
  methods: {
    handleSubmit() {
      // Basic email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.email)) {
        this.errorMessage = 'Please enter a valid email address.';
        this.successMessage = '';
        return;
      }

      // Ensure a course is selected
      if (!this.selectedCourse) {
        this.errorMessage = 'Please select a course.';
        this.successMessage = '';
        return;
      }

      // Simulate form submission
      try {
        // Replace this with your actual form submission logic
        console.log('Form submitted:', {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          course: this.selectedCourse,
        });
        this.successMessage = 'Thank you for joining the waitlist!';
        this.errorMessage = '';
        // Reset form fields
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.selectedCourse = '';
      } catch (error) {
        this.errorMessage = 'An error occurred. Please try again later.';
        this.successMessage = '';
      }
    },
  },
};
</script>
