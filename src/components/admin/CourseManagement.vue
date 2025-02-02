<template>
    <section>
      <h1 class="text-3xl font-bold mb-6">Course Management</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="course in courses" :key="course.id" class="bg-gray-50 p-6 rounded-lg shadow">
          <h2 class="text-xl font-semibold text-blue-800">{{ course.title }}</h2>
          <p class="text-gray-600 mt-2">{{ course.description }}</p>
          <button class="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">
            Remove
          </button>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        courses: [
          { id: 1, title: 'STEM Program', description: 'Covers science, technology, engineering, and math courses.' },
          { id: 2, title: 'Business & Entrepreneurship', description: 'Teaches financial literacy, management, and entrepreneurship.' },
          { id: 3, title: 'Health & Medicine', description: 'Prepares students for medical careers with biology and healthcare courses.' },
        ],
      };
    },
  };
  </script>
  