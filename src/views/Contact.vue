<template>
    <div class="flex justify-center items-center min-h-screen bg-blue-100">
      <div class="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
        <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">📬 Get in Touch</h2>
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label for="firstName" class="block text-gray-700 mb-2">First Name:</label>
            <div class="relative">
              <input
                type="text"
                id="firstName"
                v-model="formData.firstName"
                required
                class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="John"
              />
              <span class="absolute inset-y-0 right-3 flex items-center pointer-events-none">👤</span>
            </div>
          </div>
          <div class="mb-4">
            <label for="lastName" class="block text-gray-700 mb-2">Last Name:</label>
            <div class="relative">
              <input
                type="text"
                id="lastName"
                v-model="formData.lastName"
                required
                class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Doe"
              />
              <span class="absolute inset-y-0 right-3 flex items-center pointer-events-none">👤</span>
            </div>
          </div>
          <div class="mb-4">
            <label for="email" class="block text-gray-700 mb-2">Email Address:</label>
            <div class="relative">
              <input
                type="email"
                id="email"
                v-model="formData.email"
                required
                class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="john.doe@example.com"
              />
              <span class="absolute inset-y-0 right-3 flex items-center pointer-events-none">📧</span>
            </div>
          </div>
          <div class="mb-4">
            <label for="message" class="block text-gray-700 mb-2">Message:</label>
            <div class="relative">
              <textarea
                id="message"
                v-model="formData.message"
                rows="5"
                required
                class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message..."
              ></textarea>
              <span class="absolute bottom-3 right-3 flex items-center pointer-events-none">✉️</span>
            </div>
          </div>
          <button
            type="submit"
            class="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center"
          >
            Send Message 🚀
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
        this.formData.firstName = '';
        this.formData.lastName = '';
        this.formData.email = '';
        this.formData.message = '';
      },
    },
  };
  </script>
  