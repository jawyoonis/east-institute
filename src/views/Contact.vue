<template>
  <div class="flex justify-center items-center min-h-screen bg-white">
    <div class="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
      <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Get in Touch</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="firstName" class="block text-gray-700 mb-2">First Name:</label>
          <input
            type="text"
            id="firstName"
            v-model="formData.firstName"
            required
            class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="John"
          />
        </div>
        <div class="mb-4">
          <label for="lastName" class="block text-gray-700 mb-2">Last Name:</label>
          <input
            type="text"
            id="lastName"
            v-model="formData.lastName"
            required
            class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Doe"
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 mb-2">Email Address:</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            required
            class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="john.doe@example.com"
          />
        </div>
        <div class="mb-4">
          <label for="message" class="block text-gray-700 mb-2">Message:</label>
          <textarea
            id="message"
            v-model="formData.message"
            rows="5"
            required
            class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your message..."
          ></textarea>
        </div>
        <button
          type="submit"
          class="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic here
      console.log('Form submitted:', this.formData);
      // Reset form fields
      this.formData = {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      };
    },
  },
};
</script>

<style scoped>
/* Additional styling for improved aesthetics */
body {
  font-family: 'Inter', sans-serif;
}
</style>
