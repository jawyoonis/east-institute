<template>
   <div class="flex justify-center items-center min-h-screen bg-blue-50">
    <section>
      <h1 class="text-3xl font-bold mb-6 text-center">Course Management</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="course in courses"
          :key="course.id"
          class="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
        >
          <img
            :src="course.image"
            :alt="course.title"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <h2 class="text-xl font-semibold text-gray-800">{{ course.title }}</h2>
            <p class="text-gray-600 mt-2">{{ course.description }}</p>
            <button
              @click="removeCourse(course.id)"
              class="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
  </template>

  <script>
  export default {
    data() {
      return {
        courses: [
          {
            id: 1,
            title: 'STEM Program',
            description:
              'Covers science, technology, engineering, and math courses.',
            image: 'path/to/stem-image.jpg',
          },
          {
            id: 2,
            title: 'Business & Entrepreneurship',
            description:
              'Teaches financial literacy, management, and entrepreneurship.',
            image: 'path/to/business-image.jpg',
          },
          {
            id: 3,
            title: 'Health & Medicine',
            description:
              'Prepares students for medical careers with biology and healthcare courses.',
            image: 'path/to/health-image.jpg',
          },
        ],
      };
    },
    methods: {
      removeCourse(courseId) {
        this.courses = this.courses.filter((course) => course.id !== courseId);
      },
    },
  };
  </script>

  <style scoped>
  /* Add any additional custom styles here */
  </style>
