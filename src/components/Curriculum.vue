<template>
    <div class="container mx-auto px-6 py-12 bg-blue-100">
      <div class="text-center mb-10">
        <h1 class="text-5xl font-extrabold text-gray-900">📚 Student Curriculum</h1>
        <p class="text-lg text-gray-600 mt-3 max-w-3xl mx-auto">
          Explore the different curricula designed to empower students with knowledge and skills.
        </p>
      </div>

      <!-- Curriculum List -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div
          v-for="curriculum in curricula"
          :key="curriculum.id"
          class="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
        >
          <h2 class="text-2xl font-bold text-blue-800 flex items-center">
            <span class="mr-2">{{ curriculum.icon }}</span> {{ curriculum.title }}
          </h2>
          <p class="text-gray-600 mt-2">{{ curriculum.description }}</p>

          <ul class="mt-4 space-y-2 text-gray-700">
            <li v-for="subject in curriculum.subjects" :key="subject" class="flex items-center">
              <span class="text-blue-500 mr-2">✔️</span> {{ subject }}
            </li>
          </ul>

          <button
            class="mt-5 w-full px-5 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300"
          >
            View Curriculum
          </button>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: 'Curriculum',
    data() {
      return {
        curricula: [
          {
            id: 1,
            icon: '🌍',
            title: 'STEM Program',
            description: 'A comprehensive curriculum covering Science, Technology, Engineering, and Mathematics.',
            subjects: ['Mathematics', 'Physics', 'Computer Science', 'Biology'],
          },
          {
            id: 2,
            icon: '💼',
            title: 'Business & Economics',
            description: 'Focused on business principles, economics, and entrepreneurship.',
            subjects: ['Finance', 'Marketing', 'Entrepreneurship', 'Economics'],
          },
          {
            id: 3,
            icon: '🎨',
            title: 'Arts & Humanities',
            description: 'A program that enhances creativity and critical thinking through art and literature.',
            subjects: ['History', 'Literature', 'Philosophy', 'Fine Arts'],
          },
          {
            id: 4,
            icon: '🩺',
            title: 'Health & Medicine',
            description: 'Designed for students pursuing careers in medicine and healthcare.',
            subjects: ['Biology', 'Anatomy', 'Public Health', 'Medical Ethics'],
          },
          {
            id: 5,
            icon: '🚀',
            title: 'Computer Science',
            description: 'An advanced curriculum for students interested in coding and AI development.',
            subjects: ['Python Programming', 'Machine Learning', 'Data Science', 'Cybersecurity'],
          },
        ],
      };
    },
  };
  </script>

  <style scoped>
  .container {
    max-width: 1200px;
  }
  </style>
