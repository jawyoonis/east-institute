<template>
  <div class="flex justify-center items-center min-h-screen bg-blue-50">
    <section>
      <h1 class="text-3xl font-bold mb-6">Manage Curriculum</h1>

      <!-- Course List -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="course in curriculum" :key="course.id" class="bg-gray-50 p-6 rounded-lg shadow">
          <h2 class="text-xl font-semibold text-blue-800">{{ course.title }}</h2>
          <p class="text-gray-600 mt-2">{{ course.description }}</p>
          <button @click="removeCourse(course.id)" class="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">
            Remove
          </button>
        </div>
      </div>

      <!-- Add New Course Form -->
      <div class="mt-8 bg-white p-6 rounded-lg shadow">
        <h2 class="text-2xl font-semibold mb-4">Add New Course</h2>
        <form @submit.prevent="addCourse">
          <div class="mb-4">
            <label for="title" class="block text-sm font-medium text-gray-700">Course Title</label>
            <input
              type="text"
              id="title"
              v-model="newCourse.title"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter course title"
              required
            />
          </div>
          <div class="mb-4">
            <label for="description" class="block text-sm font-medium text-gray-700">Course Description</label>
            <textarea
              id="description"
              v-model="newCourse.description"
              rows="3"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter course description"
              required
            ></textarea>
          </div>
          <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Add Course
          </button>
        </form>
      </div>
    </section>
  </div>
  </template>

  <script>
  export default {
    data() {
      return {
        curriculum: [
          { id: 1, title: 'STEM Program', description: 'Covers science, technology, engineering, and math courses.' },
          { id: 2, title: 'Business & Entrepreneurship', description: 'Teaches financial literacy, management, and entrepreneurship.' },
          { id: 3, title: 'Health & Medicine', description: 'Prepares students for medical careers with biology and healthcare courses.' },
        ],
        newCourse: {
          title: '',
          description: '',
        },
      };
    },
    methods: {
      addCourse() {
        if (!this.newCourse.title || !this.newCourse.description) {
          alert('Please fill out all fields.');
          return;
        }
        const newEntry = { ...this.newCourse, id: Date.now() };
        this.curriculum.push(newEntry);
        this.newCourse.title = '';
        this.newCourse.description = '';
      },
      removeCourse(courseId) {
        this.curriculum = this.curriculum.filter(course => course.id !== courseId);
      },
    },
  };
  </script>
